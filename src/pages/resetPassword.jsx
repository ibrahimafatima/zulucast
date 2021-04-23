import React from "react";
import Joi from "joi-browser";
import { ReactComponent as MyLogo } from "../assets/images/logo.svg";
import Form from "./../components/authentication/authForm";
import authBackground from "../assets/images/auth-bg.png";

import WithSpinner from "../components/spinner/withSpinner";
import { selectLoadingStatus } from "./../redux/users/users.selector";
import { passwordResetAsync } from "../redux/users/users.action";
import { ToastContainer } from "react-toastify";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

class ResetPassword extends Form {
  state = {
    data: {
      oldPassword: "",
      password: "",
      password_confirm: "",
    },
    error: {},
  };

  schema = {
    oldPassword: Joi.string().min(8).max(20).required().label("Old Password"),
    password: Joi.string().min(8).max(20).required().label("New Password"),
    password_confirm: Joi.ref("password"),
  };

  doSubmit = async () => {
    const { passwordResetAsync } = this.props;
    passwordResetAsync(this.state.data);
  };

  componentDidMount() {
    document.title = "ZuluCast | Reset Password";
  }
  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <WithSpinner />
    ) : (
      <React.Fragment>
        <section className="auth">
          <div className="row auth-row no-gutter">
            <div
              className="col-md-6 p-0 auth-row1 d-none d-md-block"
              style={{ backgroundImage: `url(${authBackground})` }}
            >
              <div className="overlay"></div>
              <h4 className="auth-row1-text text-center">
                Unlimited african movies,
                <br />
                TV shows, and more.
              </h4>
            </div>
            <div className="col-md-6 bg-light-black">
              <div className="container  d-flex h-100">
                <span className="m-auto">
                  <div className="text-center mb-5">
                    <a href="index.html">
                      <MyLogo width="200px" />
                    </a>
                    <h4 className="mt-3">Reset Your Password</h4>
                    <p>Watch anywhere, leave anytime</p>
                  </div>

                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput(
                      "password",
                      "oldPassword",
                      "Old Password",
                      "Old Password",
                      "fa fa-key"
                    )}
                    {this.renderInput(
                      "password",
                      "password",
                      "New Password",
                      "New Password",
                      "fa fa-key"
                    )}
                    {this.renderInput(
                      "password",
                      "password_confirm",
                      "Confirm Password",
                      "Confirm Password",
                      "fa fa-key"
                    )}

                    {this.renderButton("Reset Password")}
                  </form>

                  {/* <p className="text-center mt-3">
                    Already have an account?{" "}
                    <NavLink className="text-primary" to="/login">
                      Login
                    </NavLink>
                  </p> */}
                </span>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectLoadingStatus,
});

const mapDispatchToProps = (dispatch) => ({
  passwordResetAsync: (user) => dispatch(passwordResetAsync(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);

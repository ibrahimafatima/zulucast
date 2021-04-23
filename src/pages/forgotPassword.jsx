import React from "react";
import Joi from "joi-browser";
import { ReactComponent as MyLogo } from "../assets/images/logo.svg";
import Form from "./../components/authentication/authForm";
import authBackground from "../assets/images/auth-bg.png";

import WithSpinner from "../components/spinner/withSpinner";
import { selectLoadingStatus } from "./../redux/users/users.selector";
import { forgotPasswordMaileAsync } from "../redux/users/users.action";
import { ToastContainer } from "react-toastify";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

class ForgotPassword extends Form {
  state = {
    data: {
      email: "",
    },
    error: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
  };

  doSubmit = async () => {
    const { forgotPasswordMaileAsync } = this.props;
    localStorage.setItem("forgot_password_mail", this.state.data.email);
    forgotPasswordMaileAsync(this.state.data);
  };

  componentDidMount() {
    document.title = "ZuluCast | Forgot Password";
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
                    <h4 className="mt-3">Forgot Your Password ? Reset it!</h4>
                    <p>Watch anywhere, leave anytime</p>
                    <span style={{ fontSize: "12px" }}>
                      An email will be sent to you, in order for you to reset
                      your password.
                    </span>
                  </div>

                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput(
                      "text",
                      "email",
                      "Email",
                      "Email",
                      "fa fa-envelope"
                    )}

                    {this.renderButton("Reset Password")}
                  </form>
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
  forgotPasswordMaileAsync: (user) => dispatch(forgotPasswordMaileAsync(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

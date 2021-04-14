import React from "react";
import Joi from "joi-browser";
import { ReactComponent as MyLogo } from "../assets/images/logo.svg";
import FaceboolLogo from "../assets/images/icons/facebook.svg";
import GoogleLogo from "../assets/images/icons/google.svg";
import authBackground from "../assets/images/auth-bg.png";
import Form from "../components/authentication/authForm";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { loginUserAsync } from "../redux/users/users.action";
import WithSpinner from "../components/spinner/withSpinner";
import { selectLoadingStatus } from "./../redux/users/users.selector";
import { ToastContainer } from "react-toastify";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },
    error: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().min(8).max(20).required().label("Password"),
  };

  doSubmit = async () => {
    const { loginUserAsync } = this.props;
    loginUserAsync(this.state.data);
    this.setState({
      data: {
        email: "",
        password: "",
      },
    });
  };

  componentDidMount() {
    document.title = "ZuluCast | Login";
    localStorage.removeItem("zulu_mail");
  }

  render() {
    const { isLoading } = this.props;
    return isLoading ? (
      <WithSpinner />
    ) : (
      <React.Fragment>
        <section className="auth">
          <div className="row auth-row no-gutter">
            <div className="col-md-6 bg-light-black">
              <div className="container  d-flex h-100">
                <span className="m-auto">
                  <div className="text-center mb-5">
                    <a href="index.html">
                      <MyLogo width="200px" />
                    </a>
                    <h4 className="mt-3">Login to your account</h4>
                    <p>Watch anywhere, leave anytime</p>
                  </div>

                  <form action="dashboard.html" onSubmit={this.handleSubmit}>
                    {this.renderInput(
                      "text",
                      "email",
                      "Email",
                      "Email",
                      "fa fa-envelope"
                    )}
                    {this.renderInput(
                      "password",
                      "password",
                      "Password",
                      "Password",
                      "fa fa-key"
                    )}
                    <br />

                    {this.renderButton("Login")}

                    <hr className="mt-4" />
                    <div className="text-center">
                      <span>Or continue with</span>
                    </div>

                    <div className="d-flex align-items-center justify-content-center mt-3">
                      <button type="button" className="btn btn-default">
                        <img src={GoogleLogo} alt="" />
                      </button>
                      <button className="btn btn-default" type="button">
                        <img src={FaceboolLogo} alt="" />
                      </button>
                    </div>
                  </form>

                  <p className="text-center mt-3">
                    Don't have an account?{" "}
                    <NavLink className="text-primary" to="/register">
                      Register
                    </NavLink>
                  </p>
                </span>
              </div>
            </div>

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
  loginUserAsync: (user) => dispatch(loginUserAsync(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from "react";
import Joi from "joi-browser";
import { ReactComponent as MyLogo } from "../assets/images/logo.svg";
import FaceboolLogo from "../assets/images/icons/facebook.svg";
import GoogleLogo from "../assets/images/icons/google.svg";
import authBackground from "../assets/images/auth-bg.png";
import Form from "./../components/authentication/authForm";
import { NavLink } from "react-router-dom";
import WithSpinner from "../components/spinner/withSpinner";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLoadingStatus } from "../redux/users/users.selector";
import { registerUserAsync } from "./../redux/users/users.action";
import { toast, ToastContainer } from "react-toastify";

class Register extends Form {
  state = {
    data: {
      email: "",
      username: "",
      password: "",
      password_confirm: "",
    },
    isChecked: false,
    error: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    username: Joi.string().min(3).max(20).required().label("Username"),
    password: Joi.string().min(8).max(18).required().label("Password"),
    password_confirm: Joi.ref("password"),
  };

  toggleCheck = () => this.setState({ isChecked: !this.state.isChecked });

  doSubmit = async () => {
    const { registerUserAsync } = this.props;
    const { data } = this.state;
    if (this.state.isChecked) {
      registerUserAsync({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      this.setState({
        data: {
          email: "",
          username: "",
          password: "",
          password_confirm: "",
        },
      });
    } else toast("Agree to Terms And Conditions to proceed");
  };

  componentDidMount() {
    document.title = "ZuluCast | Register";
    if ("zulu_mail" in localStorage)
      this.setState({
        data: {
          email: localStorage.getItem("zulu_mail"),
          username: "",
          password: "",
          password_confirm: "",
        },
      });
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
                    <h4 className="mt-3">Create an account</h4>
                    <p>Watch anywhere, leave anytime</p>
                  </div>

                  <form action="dashboard.html" onSubmit={this.handleSubmit}>
                    {this.renderInput(
                      "text",
                      "username",
                      "Username",
                      "Username",
                      "fa fa-user"
                    )}
                    {"zulu_mail" in localStorage
                      ? null
                      : this.renderInput(
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
                    {this.renderInput(
                      "password",
                      "password_confirm",
                      "Confirm Password",
                      "Confirm Password",
                      "fa fa-key"
                    )}

                    <div className="form-group mt-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="terms"
                          defaultChecked={this.state.isChecked}
                          onChange={this.toggleCheck}
                        />
                        <label
                          className="form-check-label small"
                          htmlFor="terms"
                        >
                          Click here if you have agreed to the Terms and
                          Conditions
                        </label>
                      </div>
                    </div>

                    {this.renderButton("Register")}

                    <hr className="my-4" />

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
                    Already have an account?{" "}
                    <NavLink className="text-primary" to="/login">
                      Login
                    </NavLink>
                  </p>
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
  registerUserAsync: (user) => dispatch(registerUserAsync(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);

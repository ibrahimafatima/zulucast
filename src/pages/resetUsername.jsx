import React, { Component } from "react";
import Joi from "joi-browser";
import { ReactComponent as MyLogo } from "../assets/images/logo.svg";
import Form from "./../components/authentication/authForm";
import authBackground from "../assets/images/auth-bg.png";

import WithSpinner from "../components/spinner/withSpinner";
import { selectLoadingStatus } from "./../redux/users/users.selector";
import { usernameUpdateAsync } from "../redux/users/users.action";
import { ToastContainer } from "react-toastify";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

class ResetUsername extends Form {
  state = {
    data: {
      username: "",
    },
    error: {},
  };

  schema = {
    username: Joi.string().min(3).max(20).required().label("username"),
  };

  doSubmit = async () => {
    //console.log(this.state);
    const { usernameUpdateAsync } = this.props;
    usernameUpdateAsync(this.state.data);
  };

  componentDidMount() {
    document.title = "ZuluCast | Update Username";
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
                    <h4 className="mt-3">Update Your Username</h4>
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

                    {this.renderButton("Update Username")}
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
  usernameUpdateAsync: (user) => dispatch(usernameUpdateAsync(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetUsername);

import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as MyLogo } from "../assets/images/logo.svg";

const MailSentConfirmation = () => {
  return (
    <React.Fragment>
      <div>
        <div className="c-outer-div">
          <MyLogo width="60px" height="12px" />
          <span style={{ fontSize: "10px", marginLeft: "20px" }}>
            Mail Confirmation | ZuluCast
          </span>
        </div>
        <div className="c-inner-div to-center">
          <MyLogo width="100px" height="40px" />
          <br />
          <hr />
          <h3>Reset Password</h3>
          <br />
          <p style={{ fontSize: "13px" }}>
            Check your inbox for the next steps. If you don't receive an email,
            and it's not in your spam folder this could mean you signed up with
            a different address.
          </p>
          <br />
          <NavLink style={{ color: "#A6226C" }} to="/login">
            Login
          </NavLink>{" "}
          Or{" "}
          <NavLink style={{ color: "#A6226C" }} to="/register">
            Sign Up
          </NavLink>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MailSentConfirmation;

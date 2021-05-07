import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "grey",
          fontWeight: "bolder",
          marginTop: "180px",
        }}
      >
        Page Not Found
      </h1>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#300E34",
          fontWeight: "bolder",
          marginTop: "30px",
        }}
      >
        <NavLink style={{ color: "#A6226C" }} to="/">
          Go To Home Page
        </NavLink>
      </h1>
    </React.Fragment>
  );
};

export default NotFound;

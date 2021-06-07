import React, { Component } from "react";
import { updateOrders } from "../services/movieServices";

class SuccessFinal extends Component {
  async componentDidMount() {
    await updateOrders();
    localStorage.setItem("zulu_cart", JSON.stringify([]));
    window.location = "/playlist";
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ margin: "50px" }}>
          Adding movie(s) you paid for, please wait...
        </h1>
      </React.Fragment>
    );
  }
}

export default SuccessFinal;

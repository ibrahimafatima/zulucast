import React, { Component } from "react";
import { deleteOrder } from "../services/movieServices";

class Failure extends Component {
  async componentDidMount() {
    await deleteOrder();
    window.location = "/playlist";
  }

  render() {
    return (
      <React.Fragment>
        <h1 style={{ margin: "50px" }}>
          Please try again your payment failed...
        </h1>
      </React.Fragment>
    );
  }
}

export default Failure;

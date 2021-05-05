import React, { Component } from "react";
import queryString from "query-string";

import { connect } from "react-redux";
import { addOrderAsync } from "../redux/movies/movies.action";

class Success extends Component {
  state = {};

  componentDidMount() {
    const { addOrderAsync } = this.props;
    let { status } = queryString.parse(this.props.location.search);

    if (status === "cancelled") {
      window.location = "/";
    } else {
      const orders = JSON.parse(localStorage.getItem("zulu_cart"));
      //console.log("ORDERS", orders);
      // for (var i = 0; i < orders.length; i++)
      //   addOrderAsync({
      //     title: orders[i].title,
      //     price: orders[i].price,
      //     description: orders[i].description,
      //     actor: orders[i].actor,
      //     duration: orders[i].duration,
      //     moviePictureURL: orders[i].moviePictureURL,
      //     movieVideoURL: orders[i].movieVideoURL,
      //   });
      addOrderAsync(orders);
      localStorage.setItem("zulu_cart", JSON.stringify([]));
    }
  }

  render() {
    let { status } = queryString.parse(this.props.location.search);
    // console.log("STATUS", status);
    // return (
    //   <React.Fragment>
    //     <h1 style={{ margin: "50px" }}>Payment Successful, Redirecting...</h1>
    //   </React.Fragment>
    // );
    return status === "cancelled" ? (
      <React.Fragment>
        <h1 style={{ margin: "50px" }}>Payment Failed, Redirecting...</h1>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <h1 style={{ margin: "50px" }}>Payment Successful, Redirecting...</h1>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addOrderAsync: (order) => dispatch(addOrderAsync(order)),
});

export default connect(null, mapDispatchToProps)(Success);

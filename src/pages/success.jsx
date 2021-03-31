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
      console.log(orders);
      for (var i = 0; i < orders.length; i++)
        addOrderAsync({
          title: orders[i].title,
          price: orders[i].price,
          description: orders[i].description,
          actor: orders[i].actor,
          duration: orders[i].duration,
          moviePictureURL: orders[i].moviePictureURL,
          movieVideoURL: orders[i].movieVideoURL,
        });
      localStorage.setItem("zulu_cart", JSON.stringify([]));
      window.location = "/playlist";
    }
  }

  render() {
    return (
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
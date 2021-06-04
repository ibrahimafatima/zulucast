import React, { Component } from "react";
import queryString from "query-string";
import { getPreOrders } from "../services/movieServices";
import { connect } from "react-redux";
import { addOrderAsync } from "../redux/movies/movies.action";
import {
  deletePreOrder,
  deleteOrder,
  updateOrders,
} from "../services/movieServices";

class Success extends Component {
  state = {};

  async componentDidMount() {
    //const { addOrderAsync } = this.props;
    let { status } = queryString.parse(this.props.location.search);

    if (status === "cancelled") {
      //await deletePreOrder();
      await deleteOrder();
      window.location = "/";
    } else {
      //const orders = JSON.parse(localStorage.getItem("zulu_cart"));
      //console.log(data);

      // const { data } = await getPreOrders();
      // addOrderAsync(data);
      // await deletePreOrder();
      await updateOrders();
      localStorage.setItem("zulu_cart", JSON.stringify([]));
      window.location = "/playlist";
    }
  }

  render() {
    let { status } = queryString.parse(this.props.location.search);
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

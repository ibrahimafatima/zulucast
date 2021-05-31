import React, { Component } from "react";
import queryString from "query-string";
import { getPreOrders } from "../services/movieServices";
import { connect } from "react-redux";
import { addOrderAsync } from "../redux/movies/movies.action";
import { deletePreOrder } from "../services/movieServices";

class Success extends Component {
  state = {};

  async componentDidMount() {
    const { addOrderAsync } = this.props;
    let { status } = queryString.parse(this.props.location.search);

    if (status === "cancelled") {
      await deletePreOrder();
      window.location = "/";
    } else {
      const { data } = await getPreOrders();
      //const orders = JSON.parse(localStorage.getItem("zulu_cart"));
      //console.log(data);
      addOrderAsync(data);
      await deletePreOrder();
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

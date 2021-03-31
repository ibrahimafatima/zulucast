import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
// import { fetchCartItems } from "../redux/cart/cart.action";
// import { selectCartItems } from "../redux/cart/cart.selector";
import {
  selectLoadingStatus,
  selectOrders,
} from "../redux/movies/movies.selector";
import { fetchOrderAsync } from "../redux/movies/movies.action";
import WithSpinner from "../components/spinner/withSpinner";
import { NavLink } from "react-router-dom";

class Playlist extends Component {
  state = { showModal: false };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  componentDidMount() {
    document.title = "ZuluCast | Cart";
    const { fetchOrderAsync } = this.props;
    fetchOrderAsync();
    //fetchCartItems(JSON.parse(localStorage.getItem("zulu_cart")) || []);
  }
  render() {
    const { orders, isLoading } = this.props;
    return isLoading ? (
      <WithSpinner />
    ) : (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <div className="container cart-page">
          <h4 className="mb-5">My Purchased Movies</h4>
          {orders.length > 0 ? (
            <div className="parent">
              {orders.map((order, i) => (
                <NavLink
                  key={i}
                  onClick={() =>
                    localStorage.setItem("URL", order.movieVideoURL)
                  }
                  to={{ pathname: "/player", movieURL: order.movieVideoURL }}
                >
                  <img
                    src={order.moviePictureURL}
                    className="child"
                    height="170px"
                    width="250px"
                    alt=""
                  />
                  <br />
                  <span
                    style={{
                      color: "#ffffff",
                      marginLeft: "16px",
                      fontStyle: "italic",
                      fontSize: "10px",
                    }}
                  >
                    Title: {order.title}
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#ffffff",
                      marginLeft: "16px",
                      fontStyle: "italic",
                      fontSize: "10px",
                    }}
                  >
                    Time remaining : 4 days 3 hours
                  </span>
                </NavLink>
              ))}
            </div>
          ) : (
            <h2>Your Playlist is Empty</h2>
          )}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // fetchCartItems: (items) => dispatch(fetchCartItems(items)),
  fetchOrderAsync: () => dispatch(fetchOrderAsync()),
});

const mapStateToProps = createStructuredSelector({
  // cartItems: selectCartItems,
  orders: selectOrders,
  isLoading: selectLoadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

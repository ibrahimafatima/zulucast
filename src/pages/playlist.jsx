import React, { Component } from "react";
import Countdown from "react-countdown";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectLoadingStatus,
  selectOrders,
} from "../redux/movies/movies.selector";
import {
  fetchOrderAsync,
  addExpiryDateAsync,
} from "../redux/movies/movies.action";
import WithSpinner from "../components/spinner/withSpinner";

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
    const { orders, isLoading, addExpiryDateAsync } = this.props;
    const date1 = new Date().getTime();
    console.log("Orders", orders);

    const renderer = ({ hours, minutes, days }) => {
      // Render a countdown
      return (
        <span
          style={{ fontSize: "12px", fontFamily: "fantasy", color: "#CB2981" }}
        >
          Time Left: {days} days, {hours} hours and {minutes} minutes
        </span>
      );
    };

    return isLoading ? (
      <WithSpinner />
    ) : (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <div className="container cart-page">
          <h4 className="mb-5">My Playlist</h4>
          {orders.length > 0 && (
            <span>
              Click to watch (Movies paid and not watched within a period of
              three months, will be removed automatically from your playlist.)
            </span>
          )}
          {orders.length > 0 ? (
            <div className="parent">
              {orders.map((order, i) => (
                <a
                  key={i}
                  onClick={() => {
                    if (!order.startWatch) {
                      addExpiryDateAsync({ _id: order._id });
                    }
                    localStorage.setItem("URL", order.movieVideoURL);
                    localStorage.setItem("Title", order.title);

                    setTimeout(() => {
                      window.location = "/player";
                    }, 2000);
                  }}
                >
                  <img
                    src={order.moviePictureURL}
                    className="child"
                    height="270px"
                    width="220px"
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
                  {order.startWatch && (
                    <Countdown
                      date={
                        Date.now() +
                        new Date(order.expiryDate).getTime() -
                        date1
                      }
                      renderer={renderer}
                    />
                  )}
                </a>
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
  fetchOrderAsync: () => dispatch(fetchOrderAsync()),
  addExpiryDateAsync: (payload) => dispatch(addExpiryDateAsync(payload)),
});

const mapStateToProps = createStructuredSelector({
  orders: selectOrders,
  isLoading: selectLoadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import Countdown from "react-countdown";

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

const URL = localStorage.getItem("URL");

class Player extends Component {
  state = { showModal: false };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  componentDidMount() {
    document.title = "ZuluCast | Player";
    const { fetchOrderAsync } = this.props;
    fetchOrderAsync();
    // console.log("WIDTH", window.innerWidth);
    // console.log("HEIGHT", window.innerHeight);
  }
  render() {
    const { orders, isLoading, addExpiryDateAsync } = this.props;
    const date1 = new Date().getTime();

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
        <div style={{ marginTop: "32px" }}>
          <iframe
            src={URL}
            height={window.innerHeight}
            width={window.innerWidth}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
            allowfullscreen="true"
          ></iframe>
        </div>
        {/* <div className="container cart-page">
          <div className="row">
            {window.innerWidth > 1000 && (
              <div className="col-4">
                <h6>Your purchased movies</h6>
                {orders.length > 0 ? (
                  <div className="parent">
                    {orders
                      .filter((o) => o.title === localStorage.getItem("Title"))
                      .map((order, i) => (
                        <div>
                          <img
                            key={i}
                            onClick={() => {
                              if (!order.startWatch) {
                                addExpiryDateAsync({ _id: order._id });
                              }
                              localStorage.setItem("URL", order.movieVideoURL);
                              window.location = "/player";
                            }}
                            src={order.moviePictureURL}
                            className="child"
                            height="170px"
                            width="250px"
                            alt=""
                          />
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
                        </div>
                      ))}
                  </div>
                ) : (
                  <h2>No Video</h2>
                )}
              </div>
            )}
            <div className="col-8">
              <video
                autoPlay
                width={
                  window.innerWidth > 1000
                    ? window.innerWidth * 0.6
                    : window.innerWidth * 0.9
                }
                height={window.innerHeight * 0.7}
                controls
              >
                <source src={URL} type="video/mp4" />
              </video>
            </div>
          </div>
        </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Player);

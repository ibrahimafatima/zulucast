import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { moviesSetting } from "../../utils/constant";

import {
  selectAllMovies,
  selectOrders,
} from "./../../redux/movies/movies.selector";
import { addExpiryDateAsync } from "./../../redux/movies/movies.action";
import { addToCart, watchLater } from "../../redux/cart/cart.action";
import { getCurrentUser } from "../../services/authServices";
import { toast } from "react-toastify";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import "../../stylesheets/style.css";
import "aos/dist/aos.css";

class PaidMovies extends Component {
  state = {
    allMovies: [],
    title: "",
  };

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  zoomValue(refValue) {
    if (refValue < 200) return "movie-thumb zoom-left";
    else if (refValue > window.innerWidth / 1.8)
      return "movie-thumb zoom-right";
    else return "movie-thumb zoom";
  }

  componentDidMount() {
    AOS.init();
  }

  render() {
    const { orders, addToCart, watchLater, longevity, addExpiryDateAsync } =
      this.props;

    return (
      <React.Fragment>
        {/* <!-- PaidMovies --> */}
        <div className="col-md-12">
          <div className="d-flex align-items-center">
            <h5 className="text-uppercase mb-0">Paid Movies</h5>
            <span className="ms-auto">
              <button
                className="btn btn-default me-5"
                id="featured-previous"
                onClick={this.previous}
              >
                <i className="fa fa-chevron-left fa-lg"></i>
              </button>
              <button
                className="btn btn-default"
                id="featured-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-lg"></i>
              </button>
            </span>
          </div>{" "}
          <ul id="featured-slide" className="ps-0 list-unstyled slide">
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              {orders.map((paidMovie, i) => (
                <li
                  key={i}
                  ref={(el) => (this[paidMovie.title] = el)}
                  className={
                    this.state[paidMovie.title]
                      ? "movie-thumb-list overlay"
                      : "movie-thumb-list"
                  }
                  onMouseEnter={() => {
                    this.setState({
                      [paidMovie.title]: true,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({ [paidMovie.title]: false });
                  }}
                >
                  <div
                    className={
                      this.state[paidMovie.title]
                        ? this.zoomValue(this[paidMovie.title].offsetLeft)
                        : "movie-thumb"
                    }
                    style={{
                      marginBottom: this.state[paidMovie.title] ? "140px" : "0",
                    }}
                    onMouseEnter={() => {
                      console.log(
                        "offest",
                        this[paidMovie.title].getBoundingClientRect()
                      );
                      console.log("offest", this[paidMovie.title].offsetLeft);
                      //console.log("WIDTH", window.innerWidth);
                      this.zoomValue(this[paidMovie.title].offsetLeft);
                    }}
                  >
                    <div
                      className="movie-thumb-cover"
                      style={{
                        display: !this.state[paidMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <img
                        src={paidMovie.moviePictureURL}
                        width="100%"
                        alt=""
                      />
                    </div>
                    <video
                      poster={
                        !longevity.playOnHover ? paidMovie.moviePictureURL : ""
                      }
                      muted
                      loop
                      className="movie-thumb-video"
                      style={{
                        display: this.state[paidMovie.title] ? "block" : "none",
                      }}
                      onMouseEnter={(event) => {
                        longevity.playOnHover && event.target.play();
                      }}
                      onMouseLeave={(event) => {
                        longevity.playOnHover && event.target.pause();
                      }}
                    >
                      <source
                        src={paidMovie.movieTrailerURL}
                        type="video/mp4"
                      />
                    </video>
                    <div
                      className="movie-thumb-content"
                      style={{
                        display: this.state[paidMovie.title] ? "block" : "none",
                      }}
                    >
                      <ul className="list-unstyled d-flex justify-content-between">
                        {getCurrentUser() &&
                          orders.filter(
                            (order) => order.title === paidMovie.title
                          ).length > 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm px-0 d-flex align-items-center"
                                onClick={() => {
                                  let watchNow = orders.filter(
                                    (order) => order.title === paidMovie.title
                                  );
                                  if (!watchNow[0].startWatch) {
                                    addExpiryDateAsync({
                                      _id: watchNow[0]._id,
                                    });
                                  }
                                  localStorage.setItem(
                                    "URL",
                                    watchNow[0].movieVideoURL
                                  );
                                  localStorage.setItem(
                                    "Title",
                                    watchNow[0].title
                                  );
                                  toast(`Loading your movie, wait...`);

                                  setTimeout(() => {
                                    window.location = "/player";
                                  }, 5000);
                                }}
                              >
                                <i className="fa fa-play-circle fa-lg me-1"></i>
                                <span>Watch now</span>
                              </button>
                            </li>
                          )}
                        {getCurrentUser() &&
                          orders.filter(
                            (order) => order.title === paidMovie.title
                          ).length <= 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm d-flex align-items-center"
                                onClick={() => {
                                  addToCart(paidMovie);
                                  toast(
                                    `${paidMovie.title} has been added to your shopping cart`
                                  );
                                }}
                              >
                                <i className="fa fa-cart-plus fa-lg me-1"></i>
                                <span>Watch Now</span>
                              </button>
                            </li>
                          )}
                        {!getCurrentUser() && (
                          <li>
                            <button
                              className="btn btn-default btn-sm d-flex align-items-center"
                              onClick={() => {
                                addToCart(paidMovie);
                                toast(
                                  `${paidMovie.title} has been added to your shopping cart`
                                );
                              }}
                            >
                              <i className="fa fa-cart-plus fa-lg me-1"></i>
                              <span>Watch Now</span>
                            </button>
                          </li>
                        )}
                        <li>
                          <button
                            className="btn btn-default d-flex btn-sm align-items-center"
                            onClick={() => {
                              watchLater(paidMovie);
                              toast(
                                `${paidMovie.title} is added to watch later list.`
                              );
                            }}
                          >
                            <span className="text-primary">Watch Later</span>
                          </button>
                        </li>
                      </ul>
                      <h5 className="fw-bolder text-uppercase mb-1">
                        {paidMovie.title} By {paidMovie.actor}
                      </h5>
                      <p className="small ellipsis-3-lines">
                        Duration: {paidMovie.duration} |{" "}
                        {/* <span className="text-primary"> */}${" "}
                        {paidMovie.price}
                        {/* </span> */}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allMovies: selectAllMovies,
  orders: selectOrders,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (movie) => dispatch(addToCart(movie)),
  watchLater: (movie) => dispatch(watchLater(movie)),
  addExpiryDateAsync: (payload) => dispatch(addExpiryDateAsync(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaidMovies);

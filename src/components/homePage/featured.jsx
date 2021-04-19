import React, { Component } from "react";
import { moviesSetting } from "../../utils/constant";

import { connect } from "react-redux";
import { addToCart, watchLater } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import {
  selectAllMovies,
  selectOrders,
} from "../../redux/movies/movies.selector";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../services/authServices";

import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

class Featured extends Component {
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
    const { allMovies, orders, addToCart, watchLater, longevity } = this.props;
    const featuredMovies = allMovies.filter((m) => m.genre === "Featured");
    //console.log("ORDERS", orders);
    return (
      <React.Fragment>
        {/* <!-- Featured --> */}
        <div className="col-md-12">
          <div className="d-flex align-items-center">
            <h5 className="text-uppercase mb-0">Featured</h5>
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
              {featuredMovies.map((featuredMovie, i) => (
                <li
                  key={i}
                  ref={(el) => (this[featuredMovie.title] = el)}
                  className={
                    this.state[featuredMovie.title]
                      ? "movie-thumb-list overlay"
                      : "movie-thumb-list"
                  }
                  onMouseEnter={() => {
                    this.setState({
                      [featuredMovie.title]: true,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({ [featuredMovie.title]: false });
                  }}
                >
                  <div
                    className={
                      this.state[featuredMovie.title]
                        ? this.zoomValue(this[featuredMovie.title].offsetLeft)
                        : "movie-thumb"
                    }
                    style={{
                      marginBottom: this.state[featuredMovie.title]
                        ? "180px"
                        : "0",
                    }}
                    onMouseEnter={() => {
                      console.log(
                        "offest",
                        this[featuredMovie.title].getBoundingClientRect()
                      );
                      console.log(
                        "offest",
                        this[featuredMovie.title].offsetLeft
                      );
                      //console.log("WIDTH", window.innerWidth);
                      this.zoomValue(this[featuredMovie.title].offsetLeft);
                    }}
                  >
                    <div
                      className="movie-thumb-cover"
                      style={{
                        display: !this.state[featuredMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <img
                        src={featuredMovie.moviePictureURL}
                        width="100%"
                        alt=""
                      />
                    </div>
                    {/* <iframe
                      src="https://watch.videodelivery.net/dc44f4c60e618d72df6df5a73c2d3ee4"
                      className="movie-thumb-video"
                      style={{
                        display: this.state[featuredMovie.title]
                          ? "block"
                          : "none",
                      }}
                      height="100"
                      width="120"
                      onMouseEnter={() => {}}
                    ></iframe> */}
                    <video
                      poster={
                        !longevity.playOnHover
                          ? featuredMovie.moviePictureURL
                          : ""
                      }
                      muted
                      loop
                      className="movie-thumb-video"
                      style={{
                        display: this.state[featuredMovie.title]
                          ? "block"
                          : "none",
                      }}
                      onMouseEnter={(event) => {
                        longevity.playOnHover && event.target.play();
                      }}
                      onMouseLeave={(event) => {
                        longevity.playOnHover && event.target.pause();
                      }}
                    >
                      <source
                        src={featuredMovie.movieTrailerURL}
                        type="video/mp4"
                      />
                    </video>
                    <div
                      className="movie-thumb-content"
                      style={{
                        display: this.state[featuredMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <ul className="list-unstyled d-flex justify-content-between">
                        {getCurrentUser() &&
                          orders.filter(
                            (order) => order.title === featuredMovie.title
                          ).length > 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm px-0 d-flex align-items-center"
                                onClick={() => {
                                  let watchNow = orders.filter(
                                    (order) =>
                                      order.title === featuredMovie.title
                                  );
                                  //if wathc is empty show alert and add to cart
                                  //else set the url in localstorage and redirect to player page
                                  // if (watchNow.length <= 0) {
                                  //   addToCart(featuredMovie);
                                  //   toast(
                                  //     "You do not have this movie in your playlist, its added to your cart."
                                  //   );
                                  // } else {
                                  localStorage.setItem(
                                    "URL",
                                    watchNow[0].movieVideoURL
                                  );
                                  window.location = "/player";
                                  // }
                                }}
                              >
                                <i className="fa fa-play-circle fa-lg me-1"></i>
                                <span>Watch now</span>
                              </button>
                            </li>
                          )}
                        {getCurrentUser() &&
                          orders.filter(
                            (order) => order.title === featuredMovie.title
                          ).length <= 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm d-flex align-items-center"
                                onClick={() => {
                                  addToCart(featuredMovie);
                                  toast(
                                    `${featuredMovie.title} is added to your cart`
                                  );
                                }}
                              >
                                <i className="fa fa-cart-plus fa-lg me-1"></i>
                                <span>Purchase Now</span>
                              </button>
                            </li>
                          )}
                        {getCurrentUser() && (
                          <li>
                            <button
                              className="btn btn-default d-flex btn-sm align-items-center"
                              onClick={() => {
                                watchLater(featuredMovie);
                                toast(
                                  `${featuredMovie.title} is added to watch later list.`
                                );
                              }}
                            >
                              <span className="text-primary">Watch Later</span>
                            </button>
                          </li>
                        )}
                        {!getCurrentUser() && (
                          <li>
                            <button
                              className="btn btn-default btn-sm d-flex align-items-center"
                              onClick={() => {
                                addToCart(featuredMovie);
                                toast(
                                  `${featuredMovie.title} is added to your cart`
                                );
                              }}
                            >
                              <i className="fa fa-cart-plus fa-lg me-1 text-primary"></i>
                              <span className="text-primary">Purchase Now</span>
                            </button>
                          </li>
                        )}
                      </ul>
                      <h5 className="fw-bolder text-uppercase mb-1">
                        {featuredMovie.title}
                      </h5>
                      <p className="small ellipsis-3-lines">
                        {featuredMovie.description}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);

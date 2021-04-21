import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { moviesSetting } from "../../utils/constant";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addToCart, watchLater } from "../../redux/cart/cart.action";
import {
  selectAllMovies,
  selectOrders,
} from "./../../redux/movies/movies.selector";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../services/authServices";
import "../../stylesheets/style.css";
import "aos/dist/aos.css";

class GhanainMovieSection extends Component {
  state = {
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

  componentDidMount() {
    AOS.init();
  }

  zoomValue(refValue) {
    if (refValue < 200) return "movie-thumb zoom-left";
    else if (refValue > window.innerWidth / 1.8)
      return "movie-thumb zoom-right";
    else return "movie-thumb zoom";
  }

  render() {
    const { allMovies, orders, addToCart, watchLater, longevity } = this.props;
    const ghanaianMovies = allMovies.filter(
      (m) => m.genre === "Ghanaian Movie"
    );

    return (
      <React.Fragment>
        {/* <!-- Ghanaian movies --> */}
        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="d-flex align-items-center">
            <h5 className="text-uppercase mb-0">Ghanaian Movies</h5>
            <span className="ms-auto">
              <button
                className="btn btn-default me-5"
                id="ghanaian-previous"
                onClick={this.previous}
              >
                <i className="fa fa-chevron-left fa-lg"></i>
              </button>
              <button
                className="btn btn-default"
                id="ghanaian-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-lg"></i>
              </button>
            </span>
          </div>{" "}
          <ul id="ghanaian-movies-slide" className="ps-0 list-unstyled slide">
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              {ghanaianMovies.map((ghanaianMovie, i) => (
                <li
                  ref={(el) => (this[ghanaianMovie.title] = el)}
                  className={
                    this.state[ghanaianMovie.title]
                      ? "movie-thumb-list overlay"
                      : "movie-thumb-list"
                  }
                  onMouseEnter={() => {
                    this.setState({
                      [ghanaianMovie.title]: true,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({ [ghanaianMovie.title]: false });
                  }}
                  key={i}
                >
                  <div
                    className={
                      this.state[ghanaianMovie.title]
                        ? this.zoomValue(this[ghanaianMovie.title].offsetLeft)
                        : "movie-thumb"
                    }
                    style={{
                      marginBottom: this.state[ghanaianMovie.title]
                        ? "140px"
                        : "0",
                    }}
                  >
                    <div
                      className="movie-thumb-cover"
                      style={{
                        display: !this.state[ghanaianMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <img
                        src={ghanaianMovie.moviePictureURL}
                        width="100%"
                        alt=""
                      />
                    </div>
                    <video
                      poster={
                        !longevity.playOnHover
                          ? ghanaianMovie.moviePictureURL
                          : ""
                      }
                      style={{
                        display: this.state[ghanaianMovie.title]
                          ? "block"
                          : "none",
                      }}
                      muted
                      loop
                      onMouseEnter={(event) => {
                        longevity.playOnHover && event.target.play();
                      }}
                      onMouseLeave={(event) => {
                        longevity.playOnHover && event.target.pause();
                      }}
                      className="movie-thumb-video"
                    >
                      <source
                        src={ghanaianMovie.movieTrailerURL}
                        type="video/mp4"
                      />
                    </video>
                    <div
                      className="movie-thumb-content"
                      style={{
                        display: this.state[ghanaianMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <ul className="list-unstyled d-flex justify-content-between">
                        {getCurrentUser() &&
                          orders.filter(
                            (order) => order.title === ghanaianMovie.title
                          ).length > 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm px-0 d-flex align-items-center"
                                onClick={() => {
                                  let watchNow = orders.filter(
                                    (order) =>
                                      order.title === ghanaianMovie.title
                                  );
                                  //if wathc is empty show alert and add to cart
                                  //else set the url in localstorage and redirect to player page
                                  // if (watchNow.length <= 0) {
                                  //   addToCart(ghanaianMovie);
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
                            (order) => order.title === ghanaianMovie.title
                          ).length <= 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm d-flex align-items-center"
                                onClick={() => {
                                  addToCart(ghanaianMovie);
                                  toast(
                                    `${ghanaianMovie.title} has been added to your shopping cart`
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
                                addToCart(ghanaianMovie);
                                toast(
                                  `${ghanaianMovie.title} has been added to your shopping cart`
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
                              watchLater(ghanaianMovie);
                              toast(
                                `${ghanaianMovie.title} is added to watch later list.`
                              );
                            }}
                          >
                            <span className="text-primary">Watch Later</span>
                          </button>
                        </li>
                      </ul>
                      <h5 className="fw-bolder text-uppercase mb-1">
                        {ghanaianMovie.title} By {ghanaianMovie.actor}
                      </h5>
                      <p className="small ellipsis-3-lines">
                        Duration: {ghanaianMovie.duration} |{" "}
                        {/* <span className="text-primary"> */}${" "}
                        {ghanaianMovie.price}
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GhanainMovieSection);

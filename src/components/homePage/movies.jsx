import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { moviesSetting } from "../../utils/constant";

import { addToCart, watchLater } from "../../redux/cart/cart.action";
import {
  selectAllMovies,
  selectOrders,
} from "./../../redux/movies/movies.selector";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../services/authServices";

import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectAllGenres } from "./../../redux/moviesGenre/genres.selector";
import { addExpiryDateAsync } from "./../../redux/movies/movies.action";
import "../../stylesheets/style.css";
import "aos/dist/aos.css";
import { Stream } from "@cloudflare/stream-react";

const str = "https://watch.videodelivery.net/da36bc3d128ab7909f7eda94f8c28ba0";

class Movies extends Component {
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
    const {
      allGenres,
      allMovies,
      orders,
      longevity,
      addToCart,
      watchLater,
      addExpiryDateAsync,
    } = this.props;

    return (
      <React.Fragment>
        {allGenres.map((genre, i) => (
          <div
            key={i}
            className="col-md-12"
            data-aos={genre.name !== "Featured" && "fade-up"}
            data-aos-duration={genre.name !== "Featured" && "1000"}
          >
            <div className="d-flex align-items-center">
              <h5 className="text-uppercase mb-0">{genre.name}</h5>
              <span
                className="ms-auto"
                onMouseEnter={() => {
                  this.setState({
                    [genre.name]: true,
                  });
                }}
                onMouseLeave={() => {
                  this.setState({ [genre.name]: false });
                }}
              >
                <button
                  className="btn btn-default me-5"
                  // id="ghanaian-previous"
                  onClick={this.previous}
                >
                  <i className="fa fa-chevron-left fa-lg"></i>
                </button>
                <button
                  className="btn btn-default"
                  //id="ghanaian-next"
                  onClick={this.next}
                >
                  <i className="fa fa-chevron-right fa-lg"></i>
                </button>
              </span>
            </div>
            <ul className="ps-0 list-unstyled slide">
              <Slider
                ref={this.state[genre.name] ? (c) => (this.slider = c) : ""}
                {...moviesSetting}
              >
                {"zulu_country" in localStorage && "zulu_language"
                  ? // ZULUCAST MOVIES FILTERED BY COUNTRY AND LANGUAGE
                    allMovies
                      .filter((movie) => movie.genre === genre.name)
                      .filter(
                        (movie) =>
                          movie.language ===
                            localStorage.getItem("zulu_language") &&
                          movie.countryName ===
                            localStorage.getItem("zulu_country")
                      )
                      .map((ghanaianMovie, i) => (
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
                                ? this.zoomValue(
                                    this[ghanaianMovie.title].offsetLeft
                                  )
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
                            <div
                              style={{
                                display: this.state[ghanaianMovie.title]
                                  ? "block"
                                  : "none",
                                width: "150px",
                              }}
                              className="movie-thumb-video"
                            ></div>
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
                                    (order) =>
                                      order.title === ghanaianMovie.title
                                  ).length > 0 && (
                                    <li>
                                      <button
                                        className="btn btn-default btn-sm px-0 d-flex align-items-center"
                                        onClick={() => {
                                          let watchNow = orders.filter(
                                            (order) =>
                                              order.title ===
                                              ghanaianMovie.title
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
                                          }, 4000);
                                        }}
                                      >
                                        <i className="fa fa-play-circle fa-lg me-1"></i>
                                        <span>Watch now</span>
                                      </button>
                                    </li>
                                  )}
                                {getCurrentUser() &&
                                  orders.filter(
                                    (order) =>
                                      order.title === ghanaianMovie.title
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
                                    <span className="text-primary">
                                      Watch Later
                                    </span>
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
                      ))
                  : // ALL ZULUCAST MOVIES DISPLAYED HERE
                    allMovies
                      .filter((movie) => movie.genre === genre.name)
                      .map((ghanaianMovie, i) => (
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
                                ? this.zoomValue(
                                    this[ghanaianMovie.title].offsetLeft
                                  )
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
                            <div
                              style={{
                                display: this.state[ghanaianMovie.title]
                                  ? "block"
                                  : "none",
                                width: "150px",
                              }}
                              className="movie-thumb-video"
                            >
                              {/* <Stream
                            width="150px"
                            height="100px"
                            controls={true}
                            muted={true}
                            src={ghanaianMovie.movieTrailerURL.slice(
                              ghanaianMovie.movieTrailerURL.lastIndexOf("/") + 1
                            )}
                          /> */}
                              {/* <iframe
                            //onMouseEnter={() => alert("Hello")}
                            src="https://watch.videodelivery.net/da36bc3d128ab7909f7eda94f8c28ba0"
                            width="150px"
                            height="100px"
                          ></iframe> */}
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
                                    (order) =>
                                      order.title === ghanaianMovie.title
                                  ).length > 0 && (
                                    <li>
                                      <button
                                        className="btn btn-default btn-sm px-0 d-flex align-items-center"
                                        onClick={() => {
                                          let watchNow = orders.filter(
                                            (order) =>
                                              order.title ===
                                              ghanaianMovie.title
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
                                          }, 4000);
                                        }}
                                      >
                                        <i className="fa fa-play-circle fa-lg me-1"></i>
                                        <span>Watch now</span>
                                      </button>
                                    </li>
                                  )}
                                {getCurrentUser() &&
                                  orders.filter(
                                    (order) =>
                                      order.title === ghanaianMovie.title
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
                                    <span className="text-primary">
                                      Watch Later
                                    </span>
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
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allGenres: selectAllGenres,
  allMovies: selectAllMovies,
  orders: selectOrders,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (movie) => dispatch(addToCart(movie)),
  watchLater: (movie) => dispatch(watchLater(movie)),
  addExpiryDateAsync: (payload) => dispatch(addExpiryDateAsync(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);

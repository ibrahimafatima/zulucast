import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { moviesSetting } from "../../utils/constant";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import {
  selectAllMovies,
  selectOrders,
} from "./../../redux/movies/movies.selector";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../services/authServices";
import "aos/dist/aos.css";

class KenyaMovieSection extends Component {
  state = {};

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
    const { allMovies, orders, addToCart, longevity } = this.props;
    const kenyanMovies = allMovies.filter((m) => m.genre === "Kenyan Movie");
    return (
      <React.Fragment>
        {/* <!-- Kenyan movies --> */}
        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="d-flex align-items-center">
            <h5 className="text-uppercase mb-0">Kenyan Movies</h5>
            <span className="ms-auto">
              <button
                className="btn btn-default me-5"
                id="kenyan-previous"
                onClick={this.previous}
              >
                <i className="fa fa-chevron-left fa-lg"></i>
              </button>
              <button
                className="btn btn-default"
                id="kenyan-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-lg"></i>
              </button>
            </span>
          </div>{" "}
          <ul id="kenyan-movies-slide" className="ps-0 list-unstyled slide">
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              {kenyanMovies.map((kenyanMovie, i) => (
                <li
                  ref={(el) => (this[kenyanMovie.title] = el)}
                  className={
                    this.state[kenyanMovie.title]
                      ? "movie-thumb-list overlay"
                      : "movie-thumb-list"
                  }
                  onMouseEnter={() => {
                    this.setState({
                      [kenyanMovie.title]: true,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({ [kenyanMovie.title]: false });
                  }}
                  key={i}
                >
                  <div
                    className={
                      this.state[kenyanMovie.title]
                        ? this.zoomValue(this[kenyanMovie.title].offsetLeft)
                        : "movie-thumb"
                    }
                    style={{
                      marginBottom: this.state[kenyanMovie.title]
                        ? "180px"
                        : "0",
                    }}
                  >
                    <div
                      className="movie-thumb-cover"
                      style={{
                        display: !this.state[kenyanMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <img
                        src={kenyanMovie.moviePictureURL}
                        width="100%"
                        alt=""
                      />
                    </div>
                    <video
                      poster={
                        !longevity.playOnHover
                          ? kenyanMovie.moviePictureURL
                          : ""
                      }
                      style={{
                        display: this.state[kenyanMovie.title]
                          ? "block"
                          : "none",
                      }}
                      muted
                      loop
                      className="movie-thumb-video"
                      onMouseEnter={(event) => {
                        longevity.playOnHover && event.target.play();
                      }}
                      onMouseLeave={(event) => {
                        longevity.playOnHover && event.target.pause();
                      }}
                    >
                      <source
                        src={kenyanMovie.movieTrailerURL}
                        type="video/mp4"
                      />
                    </video>
                    <div
                      className="movie-thumb-content"
                      style={{
                        display: this.state[kenyanMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <ul className="list-unstyled d-flex justify-content-between">
                        {getCurrentUser() &&
                          orders.filter(
                            (order) => order.title === kenyanMovie.title
                          ).length > 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm px-0 d-flex align-items-center"
                                onClick={() => {
                                  let watchNow = orders.filter(
                                    (order) => order.title === kenyanMovie.title
                                  );
                                  //if wathc is empty show alert and add to cart
                                  //else set the url in localstorage and redirect to player page
                                  // if (watchNow.length <= 0) {
                                  //   addToCart(kenyanMovie);
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
                            (order) => order.title === kenyanMovie.title
                          ).length <= 0 && (
                            <li>
                              <button
                                className="btn btn-default btn-sm d-flex align-items-center"
                                onClick={() => {
                                  addToCart(kenyanMovie);
                                  toast(
                                    `${kenyanMovie.title} is added to list`
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
                              onClick={() => alert("Working on this")}
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
                                addToCart(kenyanMovie);
                                toast(`${kenyanMovie.title} is added to list`);
                              }}
                            >
                              <i className="fa fa-cart-plus fa-lg me-1 text-primary"></i>
                              <span className="text-primary">Purchase Now</span>
                            </button>
                          </li>
                        )}
                      </ul>
                      <h5 className="fw-bolder text-uppercase mb-1">
                        {kenyanMovie.title}
                      </h5>
                      <p className="small ellipsis-3-lines">
                        {kenyanMovie.description}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(KenyaMovieSection);

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

import "../../stylesheets/style.css";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

class NigerianMovieSection extends Component {
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
    const { allMovies, orders, addToCart } = this.props;
    const nigerianMovies = allMovies.filter(
      (m) => m.genre === "Nigerian Movie"
    );
    return (
      <React.Fragment>
        {/* <!-- Nigerian movies --> */}
        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="d-flex align-items-center">
            <h5 className="text-uppercase mb-0">Nigerian Movies</h5>
            <span className="ms-auto">
              <button
                className="btn btn-default me-5"
                id="nigerian-previous"
                onClick={this.previous}
              >
                <i className="fa fa-chevron-left fa-2x"></i>
              </button>
              <button
                className="btn btn-default"
                id="nigerian-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-2x"></i>
              </button>
            </span>
          </div>{" "}
          <ul id="nigerian-movies-slide" className="ps-0 list-unstyled slide">
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              {nigerianMovies.map((nigerianMovie, i) => (
                <li
                  key={i}
                  ref={(el) => (this[nigerianMovie.title] = el)}
                  className={
                    this.state[nigerianMovie.title]
                      ? "movie-thumb-list overlay"
                      : "movie-thumb-list"
                  }
                  onMouseEnter={() => {
                    this.setState({
                      [nigerianMovie.title]: true,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({ [nigerianMovie.title]: false });
                  }}
                >
                  <div
                    className={
                      this.state[nigerianMovie.title]
                        ? this.zoomValue(this[nigerianMovie.title].offsetLeft)
                        : "movie-thumb"
                    }
                    style={{
                      marginBottom: this.state[nigerianMovie.title]
                        ? "180px"
                        : "0",
                    }}
                  >
                    <video
                      poster={nigerianMovie.moviePictureURL}
                      muted
                      loop
                      onMouseEnter={(event) => {
                        event.target.play();
                      }}
                      onMouseLeave={(event) => {
                        event.target.pause();
                      }}
                      className="movie-thumb-video"
                    >
                      <source
                        src={nigerianMovie.movieTrailerURL}
                        type="video/mp4"
                      />
                    </video>
                    <div
                      className="movie-thumb-content"
                      style={{
                        display: this.state[nigerianMovie.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                          <button
                            className="btn btn-default btn-sm px-0 d-flex align-items-center"
                            onClick={() => {
                              let watchNow = orders.filter(
                                (order) => order.title === nigerianMovie.title
                              );
                              //if wathc is empty show alert and add to cart
                              //else set the url in localstorage and redirect to player page
                              if (watchNow.length <= 0) {
                                addToCart(nigerianMovie);
                                toast(
                                  "You do not have this movie in your playlist, its added to your cart."
                                );
                              } else {
                                localStorage.setItem(
                                  "URL",
                                  watchNow[0].movieVideoURL
                                );
                                window.location = "/player";
                              }
                            }}
                          >
                            <i className="fa fa-play-circle fa-lg me-1"></i>
                            <span>Watch now</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn btn-default d-flex btn-sm align-items-center"
                            onClick={() => {
                              addToCart(nigerianMovie);
                              toast(`${nigerianMovie.title} is added to list`);
                            }}
                          >
                            <span>Add to List</span>
                          </button>
                        </li>
                        <li>
                          <button className="btn btn-default btn-sm d-flex align-items-center">
                            <span className="text-primary">Watch Later</span>
                          </button>
                        </li>
                      </ul>
                      {nigerianMovie.title}
                      <p className="small ellipsis-3-lines">
                        {nigerianMovie.description}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NigerianMovieSection);

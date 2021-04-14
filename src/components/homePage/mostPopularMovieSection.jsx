import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import blackCoffee from "../../assets/images/movies/black-coffee1.png";
import { moviesSetting } from "../../utils/constant";
import acrimony from "../../assets/videos/acrimony.mp4";
import "../../stylesheets/style.css";
import "aos/dist/aos.css";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import {
  selectAllMovies,
  selectOrders,
} from "./../../redux/movies/movies.selector";
import { toast } from "react-toastify";

class MostPopularMovieSection extends Component {
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
    const mostPopulars = allMovies.filter((m) => m.genre === "Popular Movie");
    return (
      <React.Fragment>
        {/* <!-- Most popular --> */}
        <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="d-flex align-items-center">
            <h5 className="text-uppercase mb-0">Most Popular</h5>
            <span className="ms-auto">
              <button
                className="btn btn-default me-5"
                id="most-popular-previous"
                onClick={this.previous}
              >
                <i className="fa fa-chevron-left fa-lg"></i>
              </button>
              <button
                className="btn btn-default"
                id="most-popular-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-lg"></i>
              </button>
            </span>
          </div>{" "}
          <ul
            id="most-popular-movies-slide"
            className="ps-0 list-unstyled slide"
          >
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              {mostPopulars.map((mostPopular, i) => (
                <li
                  ref={(el) => (this[mostPopular.title] = el)}
                  className={
                    this.state[mostPopular.title]
                      ? "movie-thumb-list overlay"
                      : "movie-thumb-list"
                  }
                  onMouseEnter={() => {
                    this.setState({
                      [mostPopular.title]: true,
                    });
                  }}
                  onMouseLeave={() => {
                    this.setState({ [mostPopular.title]: false });
                  }}
                  key={i}
                >
                  <div
                    className={
                      this.state[mostPopular.title]
                        ? this.zoomValue(this[mostPopular.title].offsetLeft)
                        : "movie-thumb"
                    }
                    style={{
                      marginBottom: this.state[mostPopular.title]
                        ? "180px"
                        : "0",
                    }}
                  >
                    <div
                      className="movie-thumb-cover"
                      style={{
                        display: !this.state[mostPopular.title]
                          ? "block"
                          : "none",
                      }}
                    >
                      <img
                        src={mostPopular.moviePictureURL}
                        width="100%"
                        alt=""
                      />
                    </div>
                    <video
                      poster={
                        !longevity.playOnHover
                          ? mostPopular.moviePictureURL
                          : ""
                      }
                      style={{
                        display: this.state[mostPopular.title]
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
                        src={mostPopular.movieTrailerURL}
                        type="video/mp4"
                      />
                    </video>
                    <div
                      className="movie-thumb-content"
                      style={{
                        display: this.state[mostPopular.title]
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
                                (order) => order.title === mostPopular.title
                              );
                              //if wathc is empty show alert and add to cart
                              //else set the url in localstorage and redirect to player page
                              if (watchNow.length <= 0) {
                                addToCart(mostPopular);
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
                              addToCart(mostPopular);
                              toast(`${mostPopular.title} is added to list`);
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
                      <h5 className="fw-bolder text-uppercase mb-1">
                        {mostPopular.title}
                      </h5>
                      <p className="small ellipsis-3-lines">
                        {mostPopular.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </Slider>
          </ul>
        </div>
        {/* <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">
          <div className="d-flex align-items-center">
            <h5 className="text-uppercase mb-0">Most Popular</h5>
            <span className="ms-auto">
              <button
                className="btn btn-default me-5"
                id="most-popular-previous"
                onClick={this.previous}
              >
                <i className="fa fa-chevron-left fa-lg"></i>
              </button>
              <button
                className="btn btn-default"
                id="most-popular-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-lg"></i>
              </button>
            </span>
          </div>{" "}
          <ul id="most-popular-slide" className="ps-0 list-unstyled slide">
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <div className="movie-thumb-cover">
                    <img src={blackCoffee} width="100%" alt="" />
                  </div>
                  <video poster="" muted loop className="movie-thumb-video">
                    <source src={acrimony} type="video/mp4" />
                  </video>
                  <div className="movie-thumb-content">
                    <ul className="list-unstyled d-flex justify-content-between">
                      <li>
                        <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                          <i className="fa fa-play-circle fa-lg me-1"></i>
                          <span>Resume</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default d-flex btn-sm align-items-center">
                          <span>Add to List</span>
                        </button>
                      </li>
                      <li>
                        <button className="btn btn-default btn-sm d-flex align-items-center">
                          <span className="text-primary">Watch Later</span>
                        </button>
                      </li>
                    </ul>
                    <h5 className="fw-bolder text-uppercase mb-1">
                      Black Coffee
                    </h5>
                    <p className="small ellipsis-3-lines">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptas adipisci sit ipsa quasi est quam iusto tenetur,
                      sed, nulla esse minima ducimus error assumenda.
                      Consectetur impedit est architecto adipisci possimus.
                    </p>
                  </div>
                </div>
              </li>
            </Slider>
          </ul>
        </div> */}
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
)(MostPopularMovieSection);

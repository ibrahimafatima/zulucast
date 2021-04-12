import React, { Component } from "react";
import bgImg from "../../assets/images/hero-bg.jpg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addToCart } from "../../redux/cart/cart.action";
import {
  selectAllMovies,
  selectOrders,
} from "../../redux/movies/movies.selector";
import { toast } from "react-toastify";

class HeroSection extends Component {
  state = {
    isMuted: true,
  };

  render() {
    let { allMovies, addToCart, orders } = this.props;
    const { isMuted } = this.state;
    allMovies = allMovies.filter((m) => m.isBanner);
    //const { addToCart } = this.props;
    return (
      <React.Fragment>
        {/* <!-- hero section --> */}
        {allMovies.length > 0 ? (
          <header className="homepage-header d-flex banner">
            <video poster={bgImg} muted={isMuted} loop id="hero-video" autoPlay>
              <source src={allMovies[0].movieTrailerURL} type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>

            <div className="container my-auto">
              <div className="row mt-5">
                <div className="col-lg-6">
                  <h5
                    className="text-uppercase border-left-primary p-0 ps-3"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="500"
                  >
                    {allMovies[0].releaseType}
                  </h5>
                  <h1
                    className="text-uppercase fw-bolder"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {allMovies[0].actor} - {allMovies[0].title}
                  </h1>
                  <ul
                    className="list-unstyled list-inline"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="700"
                  >
                    <li className="list-inline-item pe-3">
                      {allMovies[0].duration}
                    </li>
                    <li className="list-inline-item pe-3">
                      {allMovies[0].releaseYear}
                    </li>
                    <li className="list-inline-item">{allMovies[0].genre}</li>
                  </ul>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    {allMovies[0].description}
                  </p>

                  {/* <!-- Mobile buttons --> */}
                  <ul className="list-inline list-unstyled d-flex justify-content-around d-lg-none">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-primary btn-sm hero-play-button"
                        onClick={() => {
                          let watchNow = orders.filter(
                            (order) => order.title === allMovies[0].title
                          );
                          if (watchNow.length <= 0) {
                            addToCart(allMovies[0]);
                            toast(
                              "You do not have this movie in your playlist, its added to your cart."
                            );
                          } else {
                            localStorage.setItem(
                              "URL",
                              allMovies[0].movieVideoURL
                            );
                            window.location = "/player";
                          }
                        }}
                      >
                        Watch Now
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-default btn-sm"
                        onClick={() => {
                          addToCart(allMovies[0]);
                          toast(`${allMovies[0].title} is added to list`);
                        }}
                      >
                        <i className="fa fa-plus text-white"></i>
                        Add to List
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => this.setState({ isMuted: !isMuted })}
                      >
                        Watch Trailer
                      </a>
                    </li>
                  </ul>

                  {/* <!-- Desktop buttons --> */}
                  <ul className="list-inline list-unstyled d-none d-lg-block">
                    <li className="list-inline-item">
                      <a
                        className="btn btn-primary btn-lg hero-play-button"
                        onClick={() => {
                          let watchNow = orders.filter(
                            (order) => order.title === allMovies[0].title
                          );
                          if (watchNow.length <= 0) {
                            addToCart(allMovies[0]);
                            toast(
                              "You do not have this movie in your playlist, its added to your cart."
                            );
                          } else {
                            localStorage.setItem(
                              "URL",
                              allMovies[0].movieVideoURL
                            );
                            window.location = "/player";
                          }
                        }}
                      >
                        Watch Now
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-default btn-lg"
                        onClick={() => {
                          addToCart(allMovies[0]);
                          toast(`${allMovies[0].title} is added to list`);
                        }}
                      >
                        <i className="fa fa-plus text-white"></i>
                        Add to List
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a
                        className="btn btn-outline-primary btn-lg"
                        onClick={() => this.setState({ isMuted: !isMuted })}
                      >
                        Watch Trailer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <br />
          </header>
        ) : null}
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);

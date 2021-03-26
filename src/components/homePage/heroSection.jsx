import React, { Component } from "react";
import bgImg from "../../assets/images/hero-bg.jpg";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addToCart } from "../../redux/cart/cart.action";
import { selectAllMovies } from "../../redux/movies/movies.selector";

class HeroSection extends Component {
  state = {};
  render() {
    let { allMovies } = this.props;
    allMovies = allMovies.filter((m) => m.isBanner);
    //const { addToCart } = this.props;
    return (
      <React.Fragment>
        {/* <!-- hero section --> */}
        {allMovies.length > 0 ? (
          <header className="homepage-header d-flex">
            <video poster={bgImg} muted loop id="hero-video" autoPlay>
              <source src={allMovies[0].movieTrailerURL} type="video/mp4" />
            </video>

            <div className="hero-overlay"></div>

            <div className="container my-auto">
              <div className="row">
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
                      <a className="btn btn-primary btn-sm hero-play-button">
                        Watch Now
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-default btn-sm">
                        <i className="fa fa-plus text-white"></i>
                        Add to List
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-outline-primary btn-sm" href="/">
                        Watch Trailer
                      </a>
                    </li>
                  </ul>

                  {/* <!-- Desktop buttons --> */}
                  <ul className="list-inline list-unstyled d-none d-lg-block">
                    <li className="list-inline-item">
                      <a className="btn btn-primary btn-lg hero-play-button">
                        Watch Now
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-default btn-lg">
                        <i className="fa fa-plus text-white"></i>
                        Add to List
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="btn btn-outline-primary btn-lg" href="/">
                        Watch Trailer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  allMovies: selectAllMovies,
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (movie) => dispatch(addToCart(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);

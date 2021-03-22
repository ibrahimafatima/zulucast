import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { moviesSetting } from "../../utils/constant";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addToCart } from "../../redux/cart/cart.action";
import { selectAllMovies } from "./../../redux/movies/movies.selector";

import "../../stylesheets/style.css";
import "aos/dist/aos.css";

class GhanainMovieSection extends Component {
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

  componentDidMount() {
    AOS.init();
  }

  render() {
    const { allMovies, addToCart } = this.props;
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
                <i className="fa fa-chevron-left fa-2x"></i>
              </button>
              <button
                className="btn btn-default"
                id="ghanaian-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-2x"></i>
              </button>
            </span>
          </div>{" "}
          <ul id="ghanaian-movies-slide" className="ps-0 list-unstyled slide">
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              {ghanaianMovies.map((ghanaianMovie, i) => (
                <li
                  className={
                    this.state[ghanaianMovie.title]
                      ? "movie-thumb-list overlay"
                      : "movie-thumb-list"
                  }
                  key={i}
                >
                  <div
                    className={
                      this.state[ghanaianMovie.title]
                        ? "movie-thumb zoom-left"
                        : "movie-thumb"
                    }
                  >
                    <video
                      poster={ghanaianMovie.moviePictureURL}
                      muted
                      loop
                      onClick={() => addToCart(ghanaianMovie)}
                      // onMouseEnter={(event) => {
                      //   event.target.play();
                      //   this.setState({ [ghanaianMovie.title]: true });
                      // }}
                      // onMouseLeave={(event) => {
                      //   event.target.pause();
                      //   this.setState({ [ghanaianMovie.title]: false });
                      // }}
                      className="movie-thumb-video"
                    >
                      <source
                        src={ghanaianMovie.movieTrailerURL}
                        type="video/mp4"
                      />
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
                          <button
                            className="btn btn-default d-flex btn-sm align-items-center"
                            onClick={() => addToCart(ghanaianMovie)}
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
                        {ghanaianMovie.title}
                      </h5>
                      <p className="small ellipsis-3-lines">
                        {ghanaianMovie.description}
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
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (movie) => dispatch(addToCart(movie)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GhanainMovieSection);

import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import { moviesSetting } from "../../utils/constant";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import { selectAllMovies } from "./../../redux/movies/movies.selector";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

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
    const { allMovies, addToCart } = this.props;
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
                <i className="fa fa-chevron-left fa-2x"></i>
              </button>
              <button
                className="btn btn-default"
                id="kenyan-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-2x"></i>
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
                    <video
                      poster={kenyanMovie.moviePictureURL}
                      muted
                      loop
                      className="movie-thumb-video"
                      onMouseEnter={(event) => {
                        event.target.play();
                      }}
                      onMouseLeave={(event) => {
                        event.target.pause();
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
                        <li>
                          <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                            <i className="fa fa-play-circle fa-lg me-1"></i>
                            <span>Watch now</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn btn-default d-flex btn-sm align-items-center"
                            onClick={() => {
                              addToCart(kenyanMovie);
                              toast(`${kenyanMovie.title} is added to list`);
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
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (movie) => dispatch(addToCart(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(KenyaMovieSection);

import React, { Component } from "react";
import { moviesSetting } from "../../utils/constant";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import { selectAllMovies } from "../../redux/movies/movies.selector";

import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

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
    const { allMovies, addToCart } = this.props;
    const featuredMovies = allMovies.filter((m) => m.genre === "Featured");
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
                <i className="fa fa-chevron-left fa-2x"></i>
              </button>
              <button
                className="btn btn-default"
                id="featured-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-2x"></i>
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
                        ? "170px"
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
                      console.log("WIDTH", window.innerWidth);
                      this.zoomValue(this[featuredMovie.title].offsetLeft);
                    }}
                  >
                    <video
                      poster={featuredMovie.moviePictureURL}
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
                        <li>
                          <button className="btn btn-default btn-sm px-0 d-flex align-items-center">
                            <i className="fa fa-play-circle fa-lg me-1"></i>
                            <span>Resume</span>
                          </button>
                        </li>
                        <li>
                          <button
                            className="btn btn-default d-flex btn-sm align-items-center"
                            onClick={() => {
                              addToCart(featuredMovie);
                              toast(`${featuredMovie.title} is added to list`);
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
});

const mapDispatchToProps = (dispatch) => ({
  addToCart: (movie) => dispatch(addToCart(movie)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);

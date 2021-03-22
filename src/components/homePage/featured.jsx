import React, { Component } from "react";
import { moviesSetting } from "../../utils/constant";

import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart.action";
import { createStructuredSelector } from "reselect";
import { selectAllMovies } from "../../redux/movies/movies.selector";

import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";

class Featured extends Component {
  state = {
    allMovies: [],
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
              {featuredMovies.map((featuredMovie) => (
                <li className="movie-thumb-list" key={featuredMovie._id}>
                  <div className="movie-thumb">
                    <video
                      poster={featuredMovie.moviePictureURL}
                      muted
                      loop
                      onClick={() => addToCart(featuredMovie)}
                      className="movie-thumb-video"
                    >
                      <source
                        src={featuredMovie.movieTrailerURL}
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

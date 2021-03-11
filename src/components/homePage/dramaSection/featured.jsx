import React, { Component } from "react";
import Slider from "react-slick";
import ruthless from "../../../assets/images/movies/ruthless.png";

class Featured extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next = () => this.slider.slickNext();
  previous = () => this.slider.slickPrev();

  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,

      infinite: false,
      arrows: false,
      autoplay: false,
      autoplaySpeed: 2000,
      dotsClass: "slick-dots",
      cssEase: "ease",
      focusOnSelect: true,
      mobileFirst: false,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      respondTo: "window",
      rows: 1,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 1008,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const { showingTab } = this.props;
    return (
      <React.Fragment>
        <div
          className={
            showingTab === "featured"
              ? "tab-pane fade show active"
              : "tab-pane fade"
          }
          id="featured"
          role="tabpanel"
          aria-labelledby="featured-tab"
        >
          <div id="featured-dots"></div>
          <ul id="featured-slide" className="ps-0 list-unstyled">
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
              <li>
                <div className="movie-thumb">
                  <a href="/">
                    <img src={ruthless} alt="" />
                  </a>
                </div>
              </li>
            </Slider>
          </ul>
          <div className="d-flex">
            <span className="mx-auto mx-md-0 ms-md-auto">
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Featured;

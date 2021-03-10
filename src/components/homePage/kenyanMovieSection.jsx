import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "../../stylesheets/style.css";
import "aos/dist/aos.css";
import madea from "../../assets/images/movies/madea.png";

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

  componentDidMount() {
    AOS.init();
  }

  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 6,
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
    return (
      <React.Fragment>
        {/* <!-- Kenyan movies --> */}
        <section className="py-5">
          <div
            className="container"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3 className="text-uppercase underline fw-bolder">
              KENYAN MOVIES
            </h3>
            <div id="kenyan-movies-dots" className="full-slide-dots"></div>
            <ul id="kenyan-movies" className="slick-4 ps-0 mt-5 list-unstyled">
              <Slider ref={(c) => (this.slider = c)} {...settings}>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
                <li>
                  <div className="movie-thumb">
                    <a href="/">
                      <img src={madea} alt="" />
                    </a>
                  </div>
                </li>
              </Slider>
            </ul>
            <div className="d-flex">
              <span className="mx-auto mx-md-0 ms-md-auto">
                <button
                  className="btn btn-default me-5 full-slide-previous"
                  id="kenyan-movies-previous"
                  onClick={this.previous}
                >
                  <i className="fa fa-chevron-left fa-2x"></i>
                </button>
                <button
                  className="btn btn-default full-slide-next"
                  id="kenyan-movies-next"
                  onClick={this.next}
                >
                  <i className="fa fa-chevron-right fa-2x"></i>
                </button>
              </span>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default KenyaMovieSection;

import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import ruthless from "../../assets/images/movies/ruthless.png";
import moonlight from "../../assets/images/movies/moonlight.png";
import "../../stylesheets/style.css";
import "aos/dist/aos.css";

class DramaMovieSection extends Component {
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
    return (
      <React.Fragment>
        {/* <!-- Drama and Romance --> */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center">
                <span className="text-center text-lg-start mx-auto mx-lg-0">
                  <h2
                    className="text-uppercase fw-bolder"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    drama & romance
                  </h2>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                  >
                    Exciting, emotional and unexpected
                  </p>
                </span>
              </div>
              <div
                className="col-md-8"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active text-uppercase"
                      id="featured-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#featured"
                      type="button"
                      role="tab"
                      aria-controls="featured"
                      aria-selected="true"
                    >
                      <strong>Featured</strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link text-uppercase"
                      id="soon-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#soon"
                      type="button"
                      role="tab"
                      aria-controls="soon"
                      aria-selected="false"
                    >
                      <strong>Coming soon</strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link text-uppercase"
                      id="award-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#award"
                      type="button"
                      role="tab"
                      aria-controls="award"
                      aria-selected="false"
                    >
                      <strong>Award winning</strong>
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-5" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
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
                  <div
                    className="tab-pane fade"
                    id="soon"
                    role="tabpanel"
                    aria-labelledby="soon-tab"
                  >
                    <div id="soon-dots"></div>
                    <ul id="soon-slide" className="slick-3 ps-0 list-unstyled">
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                      <li>
                        <div className="movie-thumb">
                          <a href="/">
                            <img src={moonlight} alt="" />
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div className="d-flex">
                      <span className="mx-auto mx-md-0 ms-md-auto">
                        <button
                          className="btn btn-default me-5"
                          id="soon-previous"
                        >
                          <i className="fa fa-chevron-left fa-2x"></i>
                        </button>
                        <button className="btn btn-default" id="soon-next">
                          <i className="fa fa-chevron-right fa-2x"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="award"
                    role="tabpanel"
                    aria-labelledby="award-tab"
                  >
                    <div id="award-dots"></div>
                    <ul id="award-slide" className="slick-3 ps-0 list-unstyled">
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
                    </ul>
                    <div className="d-flex">
                      <span className="mx-auto mx-md-0 ms-md-auto">
                        <button
                          className="btn btn-default me-5"
                          id="award-previous"
                        >
                          <i className="fa fa-chevron-left fa-2x"></i>
                        </button>
                        <button className="btn btn-default" id="award-next">
                          <i className="fa fa-chevron-right fa-2x"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center text-lg-start mt-3 mt-md-0">
              <a
                className="no-decoration text-white underline text-uppercase"
                href="/"
              >
                <i className="fa fa-play-circle"></i>
                BROWSE MORE NOLLYWOOD
              </a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default DramaMovieSection;

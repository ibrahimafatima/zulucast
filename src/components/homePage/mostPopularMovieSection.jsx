import React, { Component } from "react";
import Slider from "react-slick";
import AOS from "aos";
import blackCoffee from "../../assets/images/movies/black-coffee.png";
import { moviesSetting } from "../../utils/constant";
import acrimony from "../../assets/videos/acrimony.mp4";
import "../../stylesheets/style.css";
import "aos/dist/aos.css";

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

  componentDidMount() {
    AOS.init();
  }

  render() {
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
                <i className="fa fa-chevron-left fa-2x"></i>
              </button>
              <button
                className="btn btn-default"
                id="most-popular-next"
                onClick={this.next}
              >
                <i className="fa fa-chevron-right fa-2x"></i>
              </button>
            </span>
          </div>{" "}
          <ul id="most-popular-slide" className="ps-0 list-unstyled slide">
            <Slider ref={(c) => (this.slider = c)} {...moviesSetting}>
              <li className="movie-thumb-list">
                <div className="movie-thumb">
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
                  <video
                    poster={blackCoffee}
                    muted
                    loop
                    className="movie-thumb-video"
                  >
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
        </div>
      </React.Fragment>
    );
  }
}

export default MostPopularMovieSection;

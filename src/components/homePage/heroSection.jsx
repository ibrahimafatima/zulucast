import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import bgImg from "../../assets/images/hero-bg.jpg";

class HeroSection extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <!-- hero section --> */}
        <header
          className="homepage-header d-flex"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-6">
                <h5
                  className="text-uppercase border-left-primary p-0 ps-3"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  NEW RELEASES
                </h5>
                <h1
                  className="text-uppercase fw-bolder"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  Tyler perrys - Acrimony
                </h1>
                <ul
                  className="list-unstyled list-inline"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <li className="list-inline-item pe-3">1h 45 mins</li>
                  <li className="list-inline-item pe-3">2018</li>
                  <li className="list-inline-item">Drama</li>
                </ul>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  When Ibrahim met Fatima, he was sceptical of her charming
                  nature, but couldn't deny how attracted he was to her. Once
                  they fell in love, Fatima moulded herself into everything he
                  wanted her to be
                </p>

                {/* <!-- Mobile buttons --> */}
                <ul className="list-inline list-unstyled d-flex justify-content-around d-lg-none">
                  <li className="list-inline-item">
                    <a className="btn btn-primary btn-sm" href="/">
                      Watch Now
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-default btn-sm" href="/">
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
                    <a className="btn btn-primary btn-lg" href="/">
                      Watch Now
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-default btn-lg" href="/">
                      <i className="fa fa-plus text-white"></i>
                      Add to List
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn btn-outline-primary btn-lg">
                      Watch Trailer
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default HeroSection;

import React, { Component } from "react";
import network from "../../assets/images/icons/network.svg";
import server from "../../assets/images/icons/servers.svg";
import computer from "../../assets/images/icons/computer.svg";
import getMarried from "../../assets/images/movies/why-did-i-get-married.png";

class BestPick extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <!-- Best pick --> */}
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="best-pick-cover">
                  <img width="100%" src={getMarried} alt="" />
                  <div className="card text-dark best-pick-text">
                    <div className="card-body">
                      <h6 className="text-uppercase border-left-primary ps-3">
                        New Releases
                      </h6>
                      <h5 className="text-uppercase fw-bolder">
                        Why did I get married too
                      </h5>
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item pe-3">1h 45 mins</li>
                        <li className="list-inline-item pe-3">2018</li>
                        <li className="list-inline-item">Drama</li>
                      </ul>
                      <small className="best-pick-text-description">
                        When Melinda met Robert, she was sceptical of his
                        charming nature, but couldn't deny how attracted she was
                        to him. Once they fell in love, Melinda moulded herself
                        into everything he wanted her to be
                      </small>
                      <ul className="list-unstyled list-inline mt-3">
                        <li className="list-inline-item">
                          <a href="/" className="btn btn-primary">
                            Watch Now
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="/" className="btn btn-default text-dark">
                            <i className="fa fa-plus"></i>
                            Add to List
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-2 best-pick-col-2">
                <h2
                  className="text-uppercase fw-bolder"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  Best pick for hassle-free streaming experience
                </h2>

                <ul
                  className="list-unstyled mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <li className="list-item">
                    <div className="d-flex align-items-center">
                      <img className="me-3" src={network} alt="" />
                      <h6 className="text-uppercase">Access while traveling</h6>
                    </div>
                    <p className="mt-2">
                      Keep access to your entertainment content while roaming
                      the world.Pick from thousands of african movies.
                    </p>
                  </li>
                  <li className="list-item">
                    <div className="d-flex align-items-center">
                      <img className="me-3" src={server} alt="" />
                      <h6 className="text-uppercase">
                        Stay secure at all times
                      </h6>
                    </div>
                    <p className="mt-2">
                      Securely access and enjoy your favorite content, even on
                      public Wi-Fi. Your connection
                    </p>
                  </li>
                  <li className="list-item">
                    <div className="d-flex align-items-center">
                      <img className="me-3" src={computer} alt="" />
                      <h6 className="text-uppercase">
                        Stream with no interruptions
                      </h6>
                    </div>
                    <p className="mt-2">
                      Pause for snacks, not buffering. Stream smoothly with our
                      lightning-fast NordLynx protocol network.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default BestPick;

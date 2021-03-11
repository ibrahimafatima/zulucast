import React, { Component } from "react";
import AOS from "aos";
import Featured from "./featured";
import ComingSoon from "./cominSoon";
import AwardWinning from "./awardWinning";
import "../../../stylesheets/style.css";
import "aos/dist/aos.css";

class DramaMovieSection extends Component {
  state = { showingTab: "featured" };

  onFeaturedClick = () => this.setState({ showingTab: "featured" });
  onSoonClick = () => this.setState({ showingTab: "soon" });
  onAwardClick = () => this.setState({ showingTab: "award" });

  componentDidMount() {
    AOS.init();
  }

  render() {
    const { showingTab } = this.state;
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
                      className={
                        showingTab === "featured"
                          ? "nav-link active text-uppercase"
                          : "nav-link text-uppercase"
                      }
                      id="featured-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#featured"
                      type="button"
                      role="tab"
                      aria-controls="featured"
                      aria-selected="true"
                      onClick={this.onFeaturedClick}
                    >
                      <strong>Featured</strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        showingTab === "soon"
                          ? "nav-link active text-uppercase"
                          : "nav-link text-uppercase"
                      }
                      id="soon-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#soon"
                      type="button"
                      role="tab"
                      aria-controls="soon"
                      aria-selected="false"
                      onClick={this.onSoonClick}
                    >
                      <strong>Coming soon</strong>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        showingTab === "award"
                          ? "nav-link active text-uppercase"
                          : "nav-link text-uppercase"
                      }
                      id="award-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#award"
                      type="button"
                      role="tab"
                      aria-controls="award"
                      aria-selected="false"
                      onClick={this.onAwardClick}
                    >
                      <strong>Award winning</strong>
                    </button>
                  </li>
                </ul>
                <div className="tab-content mt-5" id="myTabContent">
                  <Featured showingTab={showingTab} />
                  <ComingSoon showingTab={showingTab} />
                  <AwardWinning showingTab={showingTab} />
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

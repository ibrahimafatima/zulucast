import React, { Component } from "react";
import readyToWatch from "../../assets/images/ready-to-watch-bg.jpg";

class ReadyToWatch extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <!-- Ready to watch? --> */}
        <section
          className="py-5 ready-to-watch mt-5 d-flex align-items-center"
          style={{ backgroundImage: `url(${readyToWatch})` }}
        >
          <div className="container text-center">
            <h2
              className="text-uppercase fw-bolder"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Ready to watch?
            </h2>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              Enter your email address to create account and enjoy great movies
            </p>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <form
                  className="d-grid gap-3 gap-lg-0 d-lg-flex flex-wrap flex-lg-nowrap align-items-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <input
                    className="form-control form-control-lg me-3"
                    type="email"
                    placeholder="Your email"
                    aria-label="Email"
                  />
                  <button
                    className="btn btn-primary px-5 btn-lg"
                    style={{ width: "300px" }}
                    type="submit"
                  >
                    Get Started
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ReadyToWatch;

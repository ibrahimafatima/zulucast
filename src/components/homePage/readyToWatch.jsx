import React, { Component } from "react";
import { toast } from "react-toastify";
import { getCurrentUser } from "../../services/authServices";

class ReadyToWatch extends Component {
  state = {
    email: "",
  };

  getStarted = (e) => {
    e.preventDefault();
    if (getCurrentUser()) {
      toast("You are already logged In");
      return;
    }
    localStorage.setItem("zulu_mail", this.state.email);
    window.location = "/register";
  };

  render() {
    return (
      <React.Fragment>
        {/* <!-- Ready to watch? --> */}
        <section className="py-5 ready-to-watch d-flex align-items-center">
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
                  onSubmit={this.getStarted}
                >
                  <input
                    className="form-control form-control-lg me-2"
                    style={{ flex: 1 }}
                    type="Email"
                    placeholder="Email"
                    aria-label="Email"
                    required
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <button className="btn btn-primary btn-lg" type="submit">
                    Get started
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

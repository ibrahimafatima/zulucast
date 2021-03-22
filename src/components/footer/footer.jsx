import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <!-- Footer --> */}
        <footer className="text-center text-lg-start">
          {/* <!-- Grid container --> */}
          <div className="container p-4">
            {/* <!--Grid row--> */}
            <div className="row">
              {/* <!--Grid column--> */}
              <div className="col-lg-3 col-md-3 mb-2 mb-md-0">
                <img src={logo} width="200" alt="" />
              </div>
              {/* <!--Grid column-->

          <!--Grid column--> */}
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                {/* <!-- <h5 className="text-uppercase">Links</h5> --> */}

                <ul className="list-unstyled mb-0">
                  <li className="mb-3">
                    <a href="/" className="no-decoration text-white">
                      About Us
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="no-decoration text-white">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="no-decoration text-white">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="/" className="no-decoration text-white">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column-->

          <!--Grid column--> */}
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                {/* <!-- <h5 className="text-uppercase mb-0">Links</h5> --> */}

                <ul className="list-unstyled">
                  <li className="mb-3">
                    <a href="/" className="text-white no-decoration">
                      Careers
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white no-decoration">
                      Business Information
                    </a>
                  </li>
                  <li className="mb-3">
                    <a href="/" className="text-white no-decoration">
                      Blogspot
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white no-decoration">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column-->

          <!--Grid column--> */}
              <div className="col-lg-3 col-md-3 mb-4 mb-md-0">
                {/* <!-- <h5 className="text-uppercase mb-0">Links</h5> --> */}

                <ul className="list-unstyled">
                  <li>
                    <a href="/" className="text-dark me-4">
                      <i className="fab fa-facebook-f fa-lg text-white"></i>
                    </a>
                    <a href="/" className="text-dark me-4">
                      <i className="fab fa-instagram fa-lg text-white"></i>
                    </a>
                    <a href="/" className="text-dark">
                      <i className="fab fa-twitter fa-lg text-white"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div className="text-center p-3 small">© 2021 Copyright ZuluCast</div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </React.Fragment>
    );
  }
}

export default Footer;

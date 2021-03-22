import React, { Component } from "react";
import { ReactComponent as Faq } from "../../assets/images/icons/faq.svg";
import { ReactComponent as AccountIcon } from "../../assets/images/icons/account.svg";
import { ReactComponent as ContactIcon } from "../../assets/images/icons/contact.svg";
import { ReactComponent as RatingIcon } from "../../assets/images/icons/movie-rating.svg";
import { ReactComponent as MovieIcon } from "../../assets/images/icons/movie-icon.svg";
import { ReactComponent as MyLogo } from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.png";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <nav className="real-menu side-menu px-5 py-3" role="navigation">
          <div className="text-center mb-5">
            <a className="navbar-brand" href="/">
              <MyLogo style={{ width: "200px" }} />
            </a>
          </div>
          <ul className="list-unstyled" style={{ marginTop: "20px" }}>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <MovieIcon className="me-3 side-menu-icon" />

                <span>Latest Movies</span>
              </a>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <MovieIcon className="me-3 side-menu-icon" />

                <span>Trending Movies</span>
              </a>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <RatingIcon className="me-3" />

                <span>Most Rated</span>
              </a>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <ContactIcon className="me-3 side-menu-icon" />

                <span>Contact Us</span>
              </a>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <AccountIcon className="me-3 side-menu-icon" />

                <span>My Account</span>
              </a>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <Faq className="me-3 side-menu-icon" />

                <span>FAQs</span>
              </a>
            </li>
          </ul>

          <hr></hr>

          {/* <!-- Logged in user for mobile view -->
        <!-- if logged in --> */}
          <ul className="list-unstyled d-block d-md-none">
            <li className="list-item">
              <button
                className="btn btn-default d-flex align-items-center px-0"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="me-3">Laurine</span>
                <div>
                  <img src={avatar} width="30px" alt=""></img>
                </div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="/">
                    Account
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Manage Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider"></hr>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* <!-- Login / Get started -->
        <!-- Show only on Mobile -->
        <!-- If logged out --> */}
          <ul className="list-unstyled d-block d-md-none">
            <li className="mb-3 text-center">
              <a href="/" className="btn btn-default btn-lg">
                Login
              </a>
            </li>
            <li className="text-center">
              <a href="/" className="btn btn-primary btn-lg px-5">
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Sidebar;

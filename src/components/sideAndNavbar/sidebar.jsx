import React, { Component } from "react";
import { ReactComponent as MyLogo } from "../../assets/images/logo.svg";
import avatar from "../../assets/images/avatar.png";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../../services/authServices";

class Sidebar extends Component {
  state = {
    showModal: true,
  };

  // openModal = () => {
  //   document.body.classList.add("menu-open");
  //   this.setState({ showModal: !this.state.showModal });
  // };
  // hideModal = () => {
  //   document.body.classList.remove("menu-open");
  //   this.setState({ showModal: !this.state.showModal });
  // };

  toggleModal = () => {
    const { showModal } = this.state;
    if (showModal) {
      document.body.classList.remove("menu-open");
      // this.setState({ showModal: !this.state.showModal });
    } else {
      document.body.classList.add("menu-open");
      //this.setState({ showModal: !this.state.showModal });
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className="real-menu side-menu px-5 py-3" role="navigation">
          <div className="" onClick={() => this.toggleModal()}>
            <i
              className="fa fa-times fa-2x text-white float-end cursor"
              id="close-menu"
            ></i>
          </div>
          <div className="text-center my-5">
            <a className="navbar-brand" href="/">
              <MyLogo style={{ width: "200px" }} />
            </a>
          </div>
          <ul className="list-unstyled" style={{ marginTop: "20px" }}>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <span>Latest Movies</span>
              </a>
            </li>
            {getCurrentUser() && (
              <li className="list-item ">
                <NavLink className="side-menu-link" to="/playlist">
                  <span>My Playlist</span>
                </NavLink>
              </li>
            )}
            {getCurrentUser() && (
              <li className="list-item ">
                <NavLink className="side-menu-link" to="/watch-later">
                  <span>Watch Later Movies</span>
                </NavLink>
              </li>
            )}
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <span>Trending Movies</span>
              </a>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <span>Most Rated</span>
              </a>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
                <span>Contact Us</span>
              </a>
            </li>
            <li className="list-item">
              <NavLink className="side-menu-link" to="/settings">
                <span>Account Settings</span>
              </NavLink>
            </li>
            <li className="list-item ">
              <a className="side-menu-link" href="/">
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

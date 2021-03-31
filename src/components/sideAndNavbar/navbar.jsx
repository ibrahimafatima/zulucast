import React, { Component } from "react";
import { ReactComponent as SidebarLauncher } from "../../assets/images/icons/burgar-menu.svg";
import { ReactComponent as MyLogo } from "../../assets/images/logo.svg";
import { ReactComponent as CartIcon } from "../../assets/images/icons/shopping-cart.svg";
import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { getCurrentUser } from "./../../services/authServices";

class Navbar extends Component {
  state = {};

  openModal = () => {
    document.body.classList.add("menu-open");
    this.setState({ showModal: true });
  };
  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  render() {
    const { cartItems } = this.props;
    console.log("USERS", getCurrentUser());
    return (
      <React.Fragment>
        {/* <!-- Navbar --> */}
        <nav className="navbar navbar-expand-lg navbar-dark main-nav fixed-top">
          <div className="container-fluid">
            <a
              id="open-menu"
              className="navbar-brand"
              onClick={() =>
                this.state.showModal ? this.hideModal() : this.openModal()
              }
            >
              <SidebarLauncher />{" "}
            </a>
            <NavLink id="open-menu" className="navbar-brand mx-auto" to="/">
              <MyLogo style={{ width: "140px" }} />
            </NavLink>

            {/* <!-- <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
           --> */}

            {/* <!-- Shoping cart mobile view --> */}
            <ul className="navbar-nav ms-auto mb-lg-0 d-inline d-md-none">
              {/* <!-- If logged in --> */}
              <li className="nav-item">
                <NavLink
                  className="btn btn-default shopping-cart-link"
                  aria-current="page"
                  to="/cart"
                >
                  <CartIcon />
                  {cartItems.length > 0 && (
                    <div className="badge rounded-pill bg-primary cart-item-count">
                      {cartItems.length}
                    </div>
                  )}
                </NavLink>
              </li>
            </ul>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex ms-auto">
                <div className="input-group input-group-lg top-search-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="button-addon2"
                  ></input>
                  <button
                    className="btn btn-outline"
                    type="button"
                    id="button-addon2"
                  >
                    <i className="fa fa-search text-primary"></i>
                  </button>
                </div>
              </form>

              <ul className="navbar-nav ms-auto mb-lg-0">
                {/* <!-- If logged in --> */}
                <li className="nav-item">
                  <NavLink
                    className="btn btn-default px-5 shopping-cart-link"
                    aria-current="page"
                    to="/cart"
                  >
                    <CartIcon />
                    {cartItems.length > 0 && (
                      <div className="badge rounded-pill bg-primary cart-item-count">
                        {cartItems.length}
                      </div>
                    )}
                  </NavLink>
                </li>
                {getCurrentUser() ? null : (
                  <li className="nav-item">
                    <NavLink
                      className="btn btn-default px-5"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                )}
                {getCurrentUser() ? null : (
                  <li className="nav-item">
                    <NavLink className="btn btn-primary px-5" to="/register">
                      Register
                    </NavLink>
                  </li>
                )}
                {getCurrentUser() ? (
                  <li className="nav-item">
                    <button
                      className="btn btn-default d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      onClick={() =>
                        this.setState({
                          showProfileMenu: !this.state.showProfileMenu,
                        })
                      }
                    >
                      <span className="me-3">{getCurrentUser().username}</span>
                      <div>
                        <img src={avatar} width="30px" alt=""></img>
                      </div>
                    </button>
                    <ul
                      className={
                        this.state.showProfileMenu
                          ? "dropdown-menu dropdown-menu-end show"
                          : "dropdown-menu dropdown-menu-end"
                      }
                    >
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
                        <NavLink className="dropdown-item" to="/logout">
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                ) : null}
                {/* <!-- If logged out -->
                <!-- <li className="nav-item">
                    <a className="btn btn-default px-5" aria-current="page" href="/">Login</a>
                </li>
                <li className="nav-item">
                    <a className="btn btn-primary px-5" href="/">Register</a>
                </li> --> */}
              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(Navbar);

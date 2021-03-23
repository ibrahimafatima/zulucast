import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchCartItems } from "../redux/cart/cart.action";
import { selectCartItems } from "../redux/cart/cart.selector";

class Playlist extends Component {
  state = { showModal: false };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  componentDidMount() {
    document.title = "ZuluCast | Cart";
    const { fetchCartItems } = this.props;
    fetchCartItems(JSON.parse(localStorage.getItem("zulu_cart")) || []);
  }
  render() {
    const { cartItems } = this.props;
    return (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <div className="container cart-page">
          <h1 className="mb-5">My PlayList</h1>

          <div className="card bg-light-black border-0">
            <div className="card-body">
              {cartItems.length > 0 ? (
                <div className="shopping-cart">
                  <h1>All movies will be played from here</h1>
                </div>
              ) : (
                <div className="shopping-cart">
                  <h1>No Item In Your Playlist Yet.</h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCartItems: (items) => dispatch(fetchCartItems(items)),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);

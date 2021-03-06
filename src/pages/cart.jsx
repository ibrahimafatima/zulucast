import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import CartTable from "../components/cart/cartTable";

import { connect } from "react-redux";
import { fetchCartItems } from "../redux/cart/cart.action";

class Cart extends Component {
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
    return (
      <React.Fragment>
        <div id="body-overlay" onClick={() => this.hideModal()}></div>
        <Sidebar />
        <Navbar />
        <CartTable />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCartItems: (items) => dispatch(fetchCartItems(items)),
});

export default connect(null, mapDispatchToProps)(Cart);

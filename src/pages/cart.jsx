import React, { Component } from "react";
import Footer from "../components/footer/footer";
import Sidebar from "../components/sideAndNavbar/sidebar";
import Navbar from "../components/sideAndNavbar/navbar";
import CartTable from "../components/cart/cartTable";

class Cart extends Component {
  state = { showModal: false };

  hideModal = () => {
    document.body.classList.remove("menu-open");
    this.setState({ showModal: false });
  };

  componentDidMount() {
    document.title = "ZuluCast | Cart";
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

export default Cart;

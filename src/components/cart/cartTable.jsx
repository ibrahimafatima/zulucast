import React, { Component } from "react";
import CartTableHeader from "./cartTableComponent/cartTableHeader";
import Checkout from "./cartTableComponent/checkout";
import SingleCartRow from "./cartTableComponent/singleCartRow";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import "../../stylesheets/cart.css";

class CartTable extends Component {
  state = {};
  render() {
    const { cartItems } = this.props;
    return (
      <React.Fragment>
        <div className="container cart-page">
          <h1 className="mb-5">Shopping Cart</h1>

          <div className="card bg-light-black border-0">
            <div className="card-body">
              {cartItems.length > 0 ? (
                <div className="shopping-cart">
                  <CartTableHeader />
                  <SingleCartRow />
                  <Checkout />
                </div>
              ) : (
                <div className="shopping-cart">
                  <h1>No Item In Cart Yet.</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartTable);

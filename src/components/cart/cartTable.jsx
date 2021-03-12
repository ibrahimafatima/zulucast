import React, { Component } from "react";
import CartTableHeader from "./cartTableComponent/cartTableHeader";
import Checkout from "./cartTableComponent/checkout";
import SingleCartRow from "./cartTableComponent/singleCartRow";

class CartTable extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="container cart-page">
          <h1 class="mb-5">Shopping Cart</h1>

          <div class="card bg-light-black border-0">
            <div class="card-body">
              <div class="shopping-cart">
                <CartTableHeader />
                <SingleCartRow />
                <Checkout />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CartTable;

import React, { Component } from "react";

class Checkout extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="totals">
          <div class="totals-item">
            <label>Subtotal</label>
            <div class="totals-value" id="cart-subtotal">
              71.97
            </div>
          </div>
          <div class="totals-item">
            <label>Tax (5%)</label>
            <div class="totals-value" id="cart-tax">
              3.60
            </div>
          </div>
          <div class="totals-item">
            <label>Shipping</label>
            <div class="totals-value" id="cart-shipping">
              15.00
            </div>
          </div>
          <div class="totals-item totals-item-total">
            <label>Grand Total</label>
            <div class="totals-value" id="cart-total">
              90.57
            </div>
          </div>
        </div>

        <div class="mt-5">
          <button class="btn btn-primary float-end mt-3 mt-md-5">
            Proceed to Checkout
          </button>
          <a
            href="index.html"
            class="btn btn-default float-end mt-3 mt-md-5 me-0 me-md-3"
          >
            Continue Shopping
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Checkout;

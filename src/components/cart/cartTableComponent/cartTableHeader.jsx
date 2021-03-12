import React, { Component } from "react";

class CartTableHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div class="column-labels">
          <label class="product-image">Image</label>
          <label class="product-details">Product</label>
          <label class="product-price fw-bolder">Price</label>
          <label class="product-quantity fw-bolder">Hours</label>
          <label class="product-removal">Remove</label>
          <label class="product-line-price fw-bolder">Total</label>
        </div>
      </React.Fragment>
    );
  }
}

export default CartTableHeader;

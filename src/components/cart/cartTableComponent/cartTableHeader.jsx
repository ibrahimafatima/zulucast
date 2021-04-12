import React, { Component } from "react";

class CartTableHeader extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="column-labels">
          <label className="product-image">Image</label>
          <label className="product-details">Product</label>
          <label className="product-price fw-bolder">Price</label>
          <label className="product-quantity fw-bolder">Duration</label>
          <label className="product-removal">Remove</label>
          <label className="product-line-price fw-bolder">Total</label>
        </div>
      </React.Fragment>
    );
  }
}

export default CartTableHeader;

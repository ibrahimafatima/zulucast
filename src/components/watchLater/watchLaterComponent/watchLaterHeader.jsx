import React from "react";

const WatchLaterHeader = () => {
  return (
    <React.Fragment>
      <div className="column-labels">
        <label className="product-image">Image</label>
        <label className="product-details">Product</label>
        <label className="product-price fw-bolder">Price</label>
        <label className="product-removal">Remove</label>
      </div>
    </React.Fragment>
  );
};

export default WatchLaterHeader;

import React, { Component } from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { clearItem } from "../../../redux/cart/cart.action";
import { selectCartItems } from "../../../redux/cart/cart.selector";

class SingleCart extends Component {
  state = {};
  render() {
    const { cartItems, clearItem } = this.props;
    return (
      <React.Fragment>
        {cartItems.map((cartItem, i) => (
          <div className="product" key={i}>
            <div className="product-image">
              <img src={cartItem.moviePictureURL} alt="pic" />
            </div>
            <div className="product-details">
              <div className="product-title">{cartItem.title}</div>
              <p className="product-description">{cartItem.description}</p>
            </div>
            <div className="product-price">{cartItem.price}</div>
            <div className="product-quantity">
              <input
                className="form-control"
                onChange={() => {}}
                value={cartItem.duration}
                min="1"
              ></input>
            </div>
            <div className="product-removal">
              <button
                className="btn btn-default"
                title="Remove this movie"
                onClick={() => {
                  clearItem(cartItem);
                  let newCartItems = JSON.parse(
                    localStorage.getItem("zulu_cart")
                  );
                  newCartItems = newCartItems.filter(
                    (c) => c._id !== cartItem._id
                  );
                  localStorage.setItem(
                    "zulu_cart",
                    JSON.stringify([...newCartItems])
                  );
                  console.log(newCartItems);
                }}
              >
                <i className="fa fa-times text-danger"></i>
              </button>
            </div>
            <div className="product-line-price">{cartItem.price}</div>
          </div>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (itemToClear) => dispatch(clearItem(itemToClear)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCart);

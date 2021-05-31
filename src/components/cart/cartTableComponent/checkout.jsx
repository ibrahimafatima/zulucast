import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import StripeCheckout from "react-stripe-checkout";
import { makeCharge } from "../../../services/paymentServices";
import zulu from "../../../assets/images/favicon.png";
import WithSpinner from "../../spinner/withSpinner";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartTotalPrice } from "../../../redux/cart/cart.selector";
import {
  addOrderAsync,
  addPreOrderAsync,
} from "../../../redux/movies/movies.action";
import { deletePreOrder } from "../../../services/movieServices";
import { getCurrentUser } from "./../../../services/authServices";
import { selectLoadingStatus } from "../../../redux/movies/movies.selector";
import { ToastContainer, toast } from "react-toastify";

const Checkout = ({ cartTotal, isLoading, addPreOrderAsync }) => {
  // const [product] = useState({
  //   name: "ZuluCast Movie",
  //   price: cartTotal,
  // });

  const makePayment = async () => {
    await deletePreOrder();
    const orders = JSON.parse(localStorage.getItem("zulu_cart"));
    addPreOrderAsync(orders);
    const { email, username } = getCurrentUser();
    const { data } = await makeCharge({
      email,
      amount: cartTotal,
      username,
    });
    window.location = data.link;
  };

  // const makePayment = async (token) => {
  //   const body = {
  //     token,
  //     product,
  //   };
  //   await makeCharge(body);
  //   // const orders = JSON.parse(localStorage.getItem("zulu_cart"));
  //   // for (var i = 0; i < orders.length; i++)
  //   //   addOrderAsync({
  //   //     title: orders[i].title,
  //   //     price: orders[i].price,
  //   //     description: orders[i].description,
  //   //     actor: orders[i].actor,
  //   //     duration: orders[i].duration,
  //   //     moviePictureURL: orders[i].moviePictureURL,
  //   //     movieVideoURL: orders[i].movieVideoURL,
  //   //   });
  //   // localStorage.setItem("zulu_cart", JSON.stringify([]));
  //   window.location = "/success";
  // };

  return isLoading ? (
    <WithSpinner />
  ) : (
    <React.Fragment>
      <div className="totals">
        <div className="totals-item">
          <label>Subtotal</label>
          <div className="totals-value" id="cart-subtotal">
            {cartTotal}
          </div>
        </div>
        <div className="totals-item">
          <label>Tax (5%)</label>
          <div className="totals-value" id="cart-tax">
            0.00
          </div>
        </div>
        <div className="totals-item">
          <label>Shipping</label>
          <div className="totals-value" id="cart-shipping">
            0.00
          </div>
        </div>
        <div className="totals-item totals-item-total">
          <label>Grand Total</label>
          <div className="totals-value" id="cart-total">
            {cartTotal}
          </div>
        </div>
      </div>

      <div className="mt-5">
        {getCurrentUser() ? (
          <button
            className="btn btn-primary float-end mt-3 mt-md-5"
            onClick={makePayment}
          >
            Proceed to Checkout
          </button>
        ) : null}
        {/* {getCurrentUser() ? (
          <StripeCheckout
            stripeKey={process.env.REACT_APP_KEY}
            token={makePayment}
            name="ZuluCast"
            image={zulu}
            amount={product.price * 100}
          >
            <button className="btn btn-primary float-end mt-3 mt-md-5">
              Proceed to Checkout
            </button>
          </StripeCheckout>
        ) : null} */}
        {getCurrentUser() ? null : (
          <button
            className="btn btn-primary float-end mt-3 mt-md-5"
            onClick={() => {
              localStorage.setItem("from", "cart");
              window.location = "/login";
            }}
          >
            Proceed to Checkout
          </button>
        )}
        <NavLink
          to="/"
          className="btn btn-default float-end mt-3 mt-md-5 me-0 me-md-3"
        >
          Continue Shopping
        </NavLink>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  cartTotal: selectCartTotalPrice,
  isLoading: selectLoadingStatus,
});

const mapDispatchToProps = (dispatch) => ({
  addOrderAsync: (order) => dispatch(addOrderAsync(order)),
  addPreOrderAsync: (order) => dispatch(addPreOrderAsync(order)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

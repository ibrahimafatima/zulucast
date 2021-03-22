import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { makeCharge } from "../../../services/paymentServices";
import zulu from "../../../assets/images/favicon.png";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartTotalPrice,
  selectCartItems,
} from "../../../redux/cart/cart.selector";

const Checkout = ({ cartItems, cartTotal }) => {
  const [product] = useState({
    name: "ZuluCast Movie",
    price: cartTotal,
  });

  const makePayment = async (token) => {
    const body = {
      token,
      product,
    };
    const response = await makeCharge(body);
    console.log(response);
    window.location = "/";
  };

  return (
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
        <NavLink
          to="/"
          className="btn btn-default float-end mt-3 mt-md-5 me-0 me-md-3"
        >
          Continue Shopping
        </NavLink>
      </div>
    </React.Fragment>
  );
};

//export default Checkout;

// class Checkout extends Component {
//   state = {};
//   render() {
//     const { cartItems, cartTotal } = this.props;
//     return (
//       <React.Fragment>
//         <div className="totals">
//           <div className="totals-item">
//             <label>Subtotal</label>
//             <div className="totals-value" id="cart-subtotal">
//               {cartTotal}
//             </div>
//           </div>
//           <div className="totals-item">
//             <label>Tax (5%)</label>
//             <div className="totals-value" id="cart-tax">
//               0.00
//             </div>
//           </div>
//           <div className="totals-item">
//             <label>Shipping</label>
//             <div className="totals-value" id="cart-shipping">
//               0.00
//             </div>
//           </div>
//           <div className="totals-item totals-item-total">
//             <label>Grand Total</label>
//             <div className="totals-value" id="cart-total">
//               {cartTotal}
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <button className="btn btn-primary float-end mt-3 mt-md-5">
//             Proceed to Checkout
//           </button>
//           <NavLink
//             to="/"
//             className="btn btn-default float-end mt-3 mt-md-5 me-0 me-md-3"
//           >
//             Continue Shopping
//           </NavLink>
//         </div>
//       </React.Fragment>
//     );
//   }
// }

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotalPrice,
});

export default connect(mapStateToProps)(Checkout);

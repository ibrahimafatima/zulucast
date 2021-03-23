import cartActionTypes from "./cart.type";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  isLoading: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.FETCH_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };

    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;

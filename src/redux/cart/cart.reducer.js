import cartActionTypes from "./cart.type";
import { addItemToCart, watchLater } from "./cart.utils";

const INITIAL_STATE = {
  cartItems: [],
  laterMovies: [],
  isLoading: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_TO_CART:
      console.log("state", state.cartItems);
      console.log("state", action.payload);
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case cartActionTypes.WATCH_LATER:
      return {
        ...state,
        laterMovies: watchLater(state.laterMovies, action.payload),
      };

    case cartActionTypes.FETCH_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };

    case cartActionTypes.FETCH_WATCH_LATER:
      return {
        ...state,
        laterMovies: action.payload,
      };

    case cartActionTypes.CLEAR_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        ),
      };

    case cartActionTypes.CLEAR_WATCH_LATER:
      return {
        ...state,
        laterMovies: state.laterMovies.filter(
          (laterMovie) => laterMovie._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export default cartReducer;

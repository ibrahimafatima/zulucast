import cartActionTypes from "./cart.type";

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
});

export const watchLater = (item) => ({
  type: cartActionTypes.WATCH_LATER,
  payload: item,
});

export const clearItem = (item) => ({
  type: cartActionTypes.CLEAR_ITEM,
  payload: item,
});

export const clearWatchLater = (item) => ({
  type: cartActionTypes.CLEAR_WATCH_LATER,
  payload: item,
});

export const fetchCartItems = (items) => ({
  type: cartActionTypes.FETCH_CART_ITEMS,
  payload: items,
});

export const fetchWatchLater = (items) => ({
  type: cartActionTypes.FETCH_WATCH_LATER,
  payload: items,
});

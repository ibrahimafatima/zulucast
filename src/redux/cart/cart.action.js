import cartActionTypes from "./cart.type";

export const addToCart = (item) => ({
  type: cartActionTypes.ADD_TO_CART,
  payload: item,
});

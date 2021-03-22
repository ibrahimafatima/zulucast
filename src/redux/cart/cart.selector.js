import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (totalPrice, cartItem) => totalPrice + cartItem.quantity * cartItem.price,
      0
    )
);

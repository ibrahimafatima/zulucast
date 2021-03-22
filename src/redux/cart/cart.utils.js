export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find((movie) => movie._id === itemToAdd._id);

  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem._id === itemToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

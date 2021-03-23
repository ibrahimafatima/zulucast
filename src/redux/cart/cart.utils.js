export const addItemToCart = (cartItems, itemToAdd) => {
  const itemExist = cartItems.find((movie) => movie._id === itemToAdd._id);

  if (itemExist) {
    return cartItems.map((cartItem) =>
      cartItem._id === itemToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    localStorage.setItem(
      "zulu_cart",
      JSON.stringify([
        ...JSON.parse(localStorage.getItem("zulu_cart")),
        itemToAdd,
      ])
    );
    //console.log(JSON.parse(localStorage.getItem("zulu_cart")));
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

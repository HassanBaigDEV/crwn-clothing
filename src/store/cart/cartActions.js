import { setCartIsOpen, setCartItem } from "./cartSlice";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

// const removeFullCartItem = (cartItems, productToRemove) => {
//   const newCartItems = cartItems.filter(
//     (cartItem) => cartItem.id !== productToRemove.id
//   );
//    return setCartItem(newCartItems);
// };

const removeCartItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    const newCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== productToRemove.id
    );
    return newCartItems;
  }
  return cartItems.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItem(newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItem(newCartItems);
};

export const removeFullItemFromCart = (cartItems, productToRemove) => {
  // setCartItems(removeFullCartItem(cartItems, productToRemove));
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== productToRemove.id
  );
  return setCartItem(newCartItems);
};

export const setIsCartOpen = (bool) => {
  // createAction("cart/setCartIsOpen", bool);
  return setCartIsOpen(bool);
};

import { useEffect,useReducer } from "react";
import { createContext, useState} from "react";

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

const removeFullCartItem = (cartItems, productToRemove) => {
   const newCartItems = cartItems.filter(
     (cartItem) => cartItem.id !== productToRemove.id
   );
   return newCartItems;
};

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

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total:0,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeFullItemFromCart:()=>{},
});


const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unhandled type of ${type} in cartReducer`);
  }
}


export const CartContextProvider = ({ children }) => {
    

    // const [isCartOpen, setIsCartOpen] = useState(false);
    // const [cartItems, setCartItems] = useState([]);
    // const [cartCount, setCartCount] = useState(0);
    // const [total, setTotal] = useState(0);

    // useEffect(() => {
    //   const newCartCount = cartItems.reduce(
    //     (total, cartItem) => total + cartItem.quantity,
    //     0
    //   );
    //   setCartCount(newCartCount);
    // }, [cartItems]);

  
    // useEffect(() => {
    //   const newTotal = cartItems.reduce(
    //     (total, cartItem) => total + cartItem.quantity*cartItem.price,
    //     0
    //   );
    //   setTotal(newTotal);
    // }, [cartItems]);



    const [{ isCartOpen, cartItems, cartCount, total }, dispatch] = useReducer(
      cartReducer,
      INITIAL_STATE
    );

    const updateCartItemsReducer = (newCartItems) => {
      const newCartTotal = newCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.price,
        0
      );
    
      const newCartCount = newCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity,
        0
      );

      const payload = { cartItems: newCartItems, total: newCartTotal, cartCount: newCartCount };

      dispatch({ type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: payload });
    };
  
    const setIsCartOpen = (bool) => {
      dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool })
    }


    const addItemToCart = (productToAdd) => {
      // setCartItems(addCartItem(cartItems, productToAdd));
      const newCartItems = addCartItem(cartItems, productToAdd);
      updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (productToRemove) => {
      // setCartItems(removeCartItem(cartItems, productToRemove));
      const newCartItems = removeCartItem(cartItems, productToRemove);
      updateCartItemsReducer(newCartItems);
    };

    const removeFullItemFromCart = (productToRemove) => {
      // setCartItems(removeFullCartItem(cartItems, productToRemove));
      const newCartItems = removeFullCartItem(cartItems, productToRemove);
      updateCartItemsReducer(newCartItems);
    }

    const value = {
      isCartOpen,
      setIsCartOpen,
      cartItems,
      cartCount,
      total,
      addItemToCart,
      removeItemFromCart,
      removeFullItemFromCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  };

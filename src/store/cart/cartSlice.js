import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { isCartOpen: false, cartItems: []},
  reducers: {
    setCartItem: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        cartItems:payload,
      };
    },
    setCartIsOpen: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        isCartOpen: payload,
      };
    },
    },
});


export const { setCartItem, setCartIsOpen } = cartSlice.actions;


export default cartSlice.reducer;

import {
    compose, applyMiddleware, 
} from "redux";
import { configureStore } from "@reduxjs/toolkit";


import logger from "redux-logger";

import userReducer from './user/userSlice'
import categoriesReducer from './categories/categoriesSlice'
import cartReducer from './cart/cartSlice'




export const store = configureStore({
  reducer: {
    user: userReducer,
    categories: categoriesReducer,
    cart:cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
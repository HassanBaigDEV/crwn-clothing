import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import userReducer from "./user/userSlice";
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";

import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [userReducer],
};

// const persistCombineReducer = persistCombineReducers(persistConfig, {
//   userReducer,
//   categoriesReducer,
//   cartReducer,
// });
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV,
  // middleware:[thunk]
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);

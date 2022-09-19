import { configureStore } from "@reduxjs/toolkit";

import { persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['user']
}

const persistedReducer= persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});

export const persistor = persistStore(store);  
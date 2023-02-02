import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import thunk from 'redux-thunk'

import { rootReducer } from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== "production" && logger, thunk].filter(
  Boolean
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [...middleWares],
});

export const persistor = persistStore(store);

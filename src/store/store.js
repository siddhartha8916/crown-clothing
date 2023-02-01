// import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleWares],
  // enhancers: composedEnhancers,
});

export default store;

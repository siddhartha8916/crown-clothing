// import { compose, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

// const loggerMiddleware = (store) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("Type : ", action.type);
//   console.log("Payload : ", action.payload);
//   console.log("Current State", store.getState());

//   next(action);

//   console.log("Next State : ", store.getState());
// };

const middleWares = [logger];

// const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = configureStore({
  reducer: rootReducer,
  middleware: [...middleWares],
  // enhancers: composedEnhancers,
});

export default store;

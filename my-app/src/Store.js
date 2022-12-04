import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducers";
import favoriteReducers from "./reducers/favorite-reducers";

const logger = (store) => (next) => (action) => {
  console.log("action", action);

  let result = next(action);

  console.log("new state", store.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    heart: favoriteReducers,
  },

  middleware: [logger],
});

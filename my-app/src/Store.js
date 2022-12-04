import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducers";
import favoriteReducers from "./reducers/favorite-reducers";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    heart: favoriteReducers,
  },
});

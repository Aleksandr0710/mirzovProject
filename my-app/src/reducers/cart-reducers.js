import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (prevState, action) => {
      if (
        prevState.products.some(
          (prevProduct) => prevProduct.id === prevProduct.id
        )
      )
        return prevState;
      return {
        ...prevState,
        products: [...prevState.products, action.payload],
      };
    },
    deletProduct: (prevState, action) => {
      return {
        ...prevState,
        products: prevState.products.filter((prevProduct) => {
          return prevProduct.id !== action.payload.id;
        }),
      };
    },
  },
});

export const { addProduct, deletProduct } = cartSlice.actions;

export default cartSlice.reducer;

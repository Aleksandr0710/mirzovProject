import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: JSON.parse(localStorage.getItem("cart-product")) || [],
  },
  reducers: {
    addProduct: (prevState, action) => {
      const newState = {
        ...prevState,
        products: [...prevState.products, action.payload],
      };
      const data = JSON.stringify(newState.products);
      localStorage.setItem("cart-product", data);
      return {
        ...prevState,
        products: [...prevState.products, action.payload],
      };
    },
    deletProduct: (prevState, action) => {
      localStorage.removeItem("cart-product");
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

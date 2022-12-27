import { createSlice } from "@reduxjs/toolkit";
export const priceSlice = createSlice({
  name: "price",
  initialState: {
    initialPrices: [
      { memory: "128 Гб", id: 7, price: "75 990₽", newPrice: "67 990₽" },
      { memory: "256 Гб", id: 8, price: "88 000₽", newPrice: "80 000₽" },
      { memory: "512 Гб", id: 9, price: "100 999₽", newPrice: "90 999₽" },
    ],
    currentMemory: {}
  },
  reducers: {
    addPrice: (prevState, action) => {
      return {
        ...prevState,
        currentMemory: action.payload
      };
    },
  },
});
export const { addPrice } = priceSlice.actions;

export default priceSlice.reducer;

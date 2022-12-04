import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "heart",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (prevState, action) => {
      if (
        prevState.favorites.some(
          (prevFavorit) => prevFavorit.id === prevFavorit.id
        )
      )
        return prevState;
      return {
        ...prevState,
        favorites: [...prevState.favorites, action.payload],
      };
    },
    deletFavorite: (prevState, action) => {
      return {
        ...prevState,
        favorites: prevState.favorites.filter((prevFavorit) => {
          return prevFavorit.id !== action.payload.id;
        }),
      };
    },
  },
});
export const { addFavorite, deletFavorite } = cartSlice.actions;

export default cartSlice.reducer;

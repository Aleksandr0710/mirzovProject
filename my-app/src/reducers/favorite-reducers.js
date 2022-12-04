import { createSlice } from "@reduxjs/toolkit";

export const heartSlice = createSlice({
  name: "heart",
  initialState: {
    favorites: JSON.parse(localStorage.getItem("favorites-product")) || [],
  },
  reducers: {
    addFavorite: (prevState, action) => {
      const newState = {
        ...prevState,
        favorites: [...prevState.favorites, action.payload],
      };
      const data = JSON.stringify(newState.favorites);
      localStorage.setItem("favorites-product", data);

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
      localStorage.removeItem("favorites-product");
      return {
        ...prevState,
        favorites: prevState.favorites.filter((prevFavorit) => {
          return prevFavorit.id !== action.payload.id;
        }),
      };
    },
  },
});
export const { addFavorite, deletFavorite } = heartSlice.actions;

export default heartSlice.reducer;

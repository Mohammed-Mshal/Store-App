import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  initialState: [],
  name: `wishlist`,
  reducers: {
    addProductToWishlist: (state, action) => {
      state.push(action.payload);
    },
    removeProductFromWishlist: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload);
    },
  },
});

export default wishlist.reducer;
export const { addProductToWishlist, removeProductFromWishlist } =
  wishlist.actions;

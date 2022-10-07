import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  initialState: [],
  name: `cart`,
  reducers: {
    addProductToCart: (state, action) => {
      state.push(action.payload);
    },
    changeCount: (state, action) => {
      state.map((el) => {
        return el.product.id === action.payload.product.id
          ? (el.count = action.payload.count)
          : el;
      });
    },

    removeProductFromCart: (state, action) => {
      return state.filter((ele) => ele.product.id !== action.payload.id);
    },
  },
});

export default cart.reducer;
export const { addProductToCart, removeProductFromCart, changeCount } =
  cart.actions;

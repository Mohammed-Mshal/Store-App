import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  initialState: [],
  name: `counter`,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      return state.filter((e) => e.id !== action.payload.id);
    },
  },
});

export default counter.reducer;
export const { addProduct, removeProduct } = counter.actions;

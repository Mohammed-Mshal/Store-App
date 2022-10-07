import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  `products/fetchProducts`,
  async () => {
    const data = await fetch("https://fakestoreapi.com/products?sort=asc");
    return data.json();
  }
);
export const fetchDescProducts = createAsyncThunk(
  `products/fetchAscProducts`,
  async () => {
    const data = await fetch("https://fakestoreapi.com/products?sort=desc");
    return data.json();
  }
);

export const products = createSlice({
  initialState: [],
  name: `products`,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(fetchDescProducts.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export const { getProduct } = products.actions;
export default products.reducer;

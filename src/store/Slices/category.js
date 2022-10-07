import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk(
  `products/fetchCategory`,
  async () => {
    const data = await fetch("https://fakestoreapi.com/products/categories");
    return data.json();
  }
);

 const category = createSlice({
  initialState: [],
  name: `category`,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default category.reducer;

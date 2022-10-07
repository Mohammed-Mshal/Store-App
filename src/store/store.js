import { configureStore } from "@reduxjs/toolkit";
import cart from "./Slices/cart";
import category from "./Slices/category";
import counter from "./Slices/counter";
import products from "./Slices/products";
import wishlist from "./Slices/wishlist";

export const store = configureStore({
  reducer: {
    Products: products,
    Category: category,
    Wishlist: wishlist,
    Cart: cart,
    Counter:counter
  },
});

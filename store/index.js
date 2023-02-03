import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, products: productSlice.reducer },
});

export const authActions = authSlice.actions;
export const productActions = productSlice.actions;

export default store;

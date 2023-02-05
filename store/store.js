import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productSlice from "./productSlice";
import { createWrapper } from "next-redux-wrapper";

const maekeStore = () =>
  configureStore({
    reducer: { auth: authSlice.reducer, products: productSlice.reducer },
  });

export const authActions = authSlice.actions;
export const productActions = productSlice.actions;

export const wrapper = createWrapper(maekeStore);

// export default store;

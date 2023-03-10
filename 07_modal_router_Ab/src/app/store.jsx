import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modal/modalSlice";
import { productsSlice } from "../features/products/productsSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    api: productsSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsSlice.middleware]),
  devTools: true,
});

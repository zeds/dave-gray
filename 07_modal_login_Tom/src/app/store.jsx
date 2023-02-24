import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "../features/modal/modalSlice";
import { productsSlice } from "../features/products/productsSlice";
import { usersSlice } from "../features/users/usersSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    api: productsSlice.reducer,
    auth: authReducer,
    user: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsSlice.middleware]),
  devTools: true,
});

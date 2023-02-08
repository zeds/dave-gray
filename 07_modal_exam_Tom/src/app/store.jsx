import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../features/modal/modalSlice';
import { productsSlice } from '../features/products/productsSlice';

export const store = configureStore({
  reducer: {
		modal: modalSlice,
		api: productsSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  	getDefaultMiddleware({}).concat([
		productsSlice.middleware
	])
});

import { configureStore } from '@reduxjs/toolkit';
import modalSlice from '../../../12_jwt_login/src/features/modal/modalSlice';

export const store = configureStore({
  reducer: {
		modal: modalSlice,
  }
});
export default store
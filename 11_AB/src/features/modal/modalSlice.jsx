import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isProfileOpen: false,
	
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openProfile: (state, action) => {
      state.isProfileOpen = true;
    },
    closeProfile: (state, action) => {
      state.isProfileOpen = false;
      
    },
}
});

export const { openDelete, closeModal, openProduct } = modalSlice.actions;

export default modalSlice.reducer;

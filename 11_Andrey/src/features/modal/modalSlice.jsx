import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isProfileOpen: false,
  isOptionOpen:false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    confirmChanges: (state,action) =>{
      // -------------------------------------------------------------------------------------------------
      state.isProfileOpen = false;
    },
    openProfile: (state, action) => {
      state.isProfileOpen = true;
    },
    closeProfile: (state, action) => {
      state.isProfileOpen = false;
    },
    openOption: (state, action) => {
      debugger
      state.isOptionOpen = true;
    },
    closeOption: (state, action) => {
      state.isOptionOpen = false;
    },
  },
});

export const { openProfile, closeProfile, confirmChanges, openOption,closeOption} = modalSlice.actions;

export default modalSlice.reducer;

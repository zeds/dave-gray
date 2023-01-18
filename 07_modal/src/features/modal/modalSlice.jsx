import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  body: '初期値'
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
			state.body = action.payload.body
			state.id = action.payload.id
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

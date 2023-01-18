import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
	isOpenEdit: false,
	id: 0,
	name: '',
	price: 0,
	publish: false
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
			state.id = action.payload.id
			state.name = action.payload.name
    },
    closeModal: (state, action) => {
      state.isOpen = false;
    },
    openEdit: (state, action) => {
      state.isOpenEdit = true;
			state.id = action.payload.id
			state.name = action.payload.name
			state.price = action.payload.price
			state.publish = action.payload.publish
    },
    closeEdit: (state, action) => {
      state.isOpenEdit = false;
    },
  },
});

export const { openModal, closeModal, openEdit, closeEdit } = modalSlice.actions;

export default modalSlice.reducer;

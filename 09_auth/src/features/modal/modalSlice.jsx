import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDeleteOpen: false,
	isProductOpen: false,
	isLoginOpen: false,
	title: '',
	id: 0,
	name: '',
	price: 0,
	publish: false,
	type: ''	// 'edit' or 'new'
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openDelete: (state, action) => {
      state.isDeleteOpen = true;
			state.id = action.payload.id
			state.name = action.payload.name
			state.title = action.payload.title
    },
    closeModal: (state, action) => {
      state.isDeleteOpen = false;
      state.isProductOpen = false;
			state.isLoginOpen = false;
    },
    openProduct: (state, action) => {
      state.isProductOpen = true;
			state.id = action.payload.id
			state.name = action.payload.name
			state.price = action.payload.price
			state.publish = action.payload.publish
			state.title = action.payload.title
			state.type = action.payload.type
    },
		openLogin: (state, action) => {
			state.isLoginOpen = true;
		}
  },
});

export const { openDelete, closeModal, openProduct, openLogin } = modalSlice.actions;

export default modalSlice.reducer;

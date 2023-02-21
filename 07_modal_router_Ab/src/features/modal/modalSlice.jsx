import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDeleteOpen: false,
	isProductOpen: false,
	isMenuOpen: false,
	isThanksOpen: false,
	title: '',
	id: 0,
	pos: 0,
	name: '',
	price: 0,
	stock: 0,
	publish: false,
	type: ''	// 'edit' or 'new'
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
		openModal: (state, action) => {
			if (action.payload.name === 'login') {
				state.isLoginOpen = action.payload.open
				return
			}
			if (action.payload.name === 'register') {
				state.isRegisterOpen = action.payload.open
				return
			}
			if (action.payload.name === 'menu') {
				state.isMenuOpen = action.payload.open
				return
			}
			if (action.payload.name === 'thanks') {
				state.isThanksOpen = action.payload.open
				state.title = action.payload.title
				return
			}
		},
    openDelete: (state, action) => {
      state.isDeleteOpen = true;
			state.id = action.payload.id
			state.name = action.payload.name
			state.title = action.payload.title
    },
    closeModal: (state, action) => {
      state.isDeleteOpen = false;
      state.isProductOpen = false;
      state.isThanksOpen = false;
    },
    openProduct: (state, action) => {
      state.isProductOpen = true;
			state.id = action.payload.id
			state.pos = action.payload.pos
			state.name = action.payload.name
			state.price = action.payload.price
			state.publish = action.payload.publish
			state.title = action.payload.title
			state.stock = action.payload.stock
			state.type = action.payload.type
    },
  },
});

export const { openModal, openDelete, closeModal, openProduct } = modalSlice.actions;

export default modalSlice.reducer;

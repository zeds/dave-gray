import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoginOpen: false,
	isRegisterOpen: false
}

const modalSlice = createSlice ({
	name: 'modal',
	initialState,
	reducers: {
		openLogin: (state, action) => {
			state.isLoginOpen = true
		},
		openRegister: (state, action) => {
			state.isRegisterOpen = true
		},
		closeModal: (state, action) => {
			state.isLoginOpen = false
			state.isRegisterOpen = false
		}
	}
})

export const { openLogin, openRegister, closeModal } = modalSlice.actions
export default modalSlice.reducer

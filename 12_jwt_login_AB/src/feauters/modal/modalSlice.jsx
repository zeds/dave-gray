import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoginOpen: false,
	isRegisterOpen: false,
	isFacbookOpen: false
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
		openFacbook: (state, action) => {
			state.isFacbookOpen = true
		},
		closeModal: (state, action) => {
			state.isLoginOpen = false
			state.isRegisterOpen = false
			state.isFacbookOpen = false

		}
	}
})

export const { openLogin, openRegister,openFacbook, closeModal } = modalSlice.actions
export default modalSlice.reducer

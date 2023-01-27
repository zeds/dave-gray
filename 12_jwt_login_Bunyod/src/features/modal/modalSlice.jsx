import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoginOpen: false
}

const modalSlice = createSlice ({
	name: 'modal',
	initialState,
	reducers: {
		openLogin: (state, action) => {
			state.isLoginOpen = true
		},
		closeLogin: (state, action) => {
			state.isLoginOpen = false
		}
	}
})

export const { openLogin, closeLogin } = modalSlice.actions
export default modalSlice.reducer

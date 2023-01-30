import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLoginOpen: false,
	isRegisterOpen: false
}

const modalSlice = createSlice ({
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
			alert("action is wrong")
		}
	}
})

export const { openModal } = modalSlice.actions
export default modalSlice.reducer //use from store

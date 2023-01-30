import React from 'react'
import { useDispatch } from 'react-redux';
import style from './Modal.module.css'
import { openModal } from '../features/modal/modalSlice'

const RegisterModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickRegister(e) {
		e.preventDefault()
		dispatch(openModal({name:'register',open:false}))
	}

	return (
		<div className={style.container}>
			<div className={style.form}>
			<p>Register</p>
				<form onSubmit={clickRegister}>
					<input type="text" placeholder="name"/>
					<input type="password" placeholder="password"/>
					<input type="text" placeholder="email address"/>
					<button type="submit">register</button>
					<p className={style.message}>Already registered? <a href="#">Sign In</a></p>
				</form>
			</div>
		</div>
	)
}

export default RegisterModal
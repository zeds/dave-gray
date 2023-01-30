import React from 'react'
import { useDispatch } from 'react-redux';
import style from './Modal.module.css'
import { openModal } from '../features/modal/modalSlice'

const LoginModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickLogin(e) {
		e.preventDefault()
		dispatch(openModal({name:'login',open:false}))
	}

	return (
		<div className={style.container}>
			<div className={style.form}>
				<p>Login</p>
				<form onSubmit={clickLogin}>
					<input type="text" placeholder="username"/>
					<input type="password" placeholder="password"/>
					<button type="submit">login</button>
					<p className={style.message}>Not registered? <a href="#">Create an account</a></p>
				</form>
			</div>
		</div>
	)
}

export default LoginModal
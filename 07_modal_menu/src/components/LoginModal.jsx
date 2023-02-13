import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import style from './Modal.module.scss'
import { openModal } from '../features/modal/modalSlice'
import { useLoginMutation } from '../features/products/productsSlice'

export const LoginModal = ({
	open
}) => {

	if (!open) return null
	const dispatch = useDispatch();
	const [email, setEmail] = useState('tom@gmail.com')
	const [login, { isLoading }] = useLoginMutation()


	const clickLogin2 = async () => {
		//e.preventDefault()

		console.log("hoge")
	}

	const clickLogin = () => {
		alert("hehe")
	}

	return (
		<div className={style.modal_container}>
			<div className={style.modal_form}>
				<p>Login</p>
				<form onSubmit={()=>clickLogin()}>
					<input
						value={email}
						type="text"
						placeholder="username"/>
					<input type="password" placeholder="password"/>
					<button type="submit">login</button>
					<p className={style.message}>Not registered? <a href="#">Create an account</a></p>
				</form>
			</div>
		</div>
	)
}

export default LoginModal
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import style from './Modal.module.scss'
import { openModal } from '../../features/modal/modalSlice'
import { useLoginMutation } from '../../features/products/productsSlice'

export const LoginModal = ({
	open
}) => {

	if (!open) return null
	const dispatch = useDispatch();
	const [email, setEmail] = useState('ahmadov.abror122333@gmail.com')
	const [login, { isLoading }] = useLoginMutation()


	const clickLogin2 = async () => {
		//e.preventDefault()

		console.log("hoge")

		//const userData = await login(credentials).unwrap()
		//console.log("userData=", userData)
		//dispatch(setCredentials(userData))

		//alert("API response=",JSON.stringify(userData))


		//dispatch(openModal({name:'login',open:false}))
	}

	const clickLogin = () => {
		alert("hello")
	}

	return (
		<div className={style.modal_container}>
			<div className={style.modal_form}>
				<p>ログイン</p>
				<form onSubmit={()=>clickLogin()}>
					<input
						value={email}
						type="text"
						placeholder="ユーザー名"/>
					<input type="password" placeholder="パスワード"/>
					<button type="submit">ログイン</button>
					<p className={style.message}><a href="#">パスワードを忘れの方へ ! !</a> <a href="#">新規登録</a></p>
				</form>
			</div>
		</div>
	)
}

export default LoginModal
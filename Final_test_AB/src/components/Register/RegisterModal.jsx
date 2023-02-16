import React from 'react'
import { useDispatch } from 'react-redux';
import style from './Modal.module.scss'
import { openModal } from '../../features/modal/modalSlice'

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
		<div className={style.modal_container}>
			<div className={style.modal_form}>
				<p>新規登録</p>
				<form onSubmit={clickRegister}>
					<input type="text" placeholder="名前"/>
					<input type="password" placeholder="パスワード"/>
					<input type="text" placeholder="メールアドレス"/>
					<button type="submit">新規登録</button>
					<p className={style.message}>ログイン <a href="#">！！</a></p>
				</form>
			</div>
		</div>
	)
}

export default RegisterModal
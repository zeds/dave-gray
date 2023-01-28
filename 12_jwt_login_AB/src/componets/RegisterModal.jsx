import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeModal } from '../feauters/modal/modalSlice';

const RegisterModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickCreate() {
		dispatch(closeModal())
	}


	return (
<div className={style.container}>

  <div className={style.form}>
	<p>新規登録</p>
    <form className={style['register-form']}>
      <input type="text" placeholder="名前"/>
      <input type="password" placeholder="パスワード"/>
      <input type="text" placeholder="メールアドレス"/>
			<button onClick={() => clickCreate()}>新規登録</button>
      <p className={style.message}>Already registered? <a href="#">ログイン</a></p>
    </form>
  </div>
</div>
	)
}

export default RegisterModal
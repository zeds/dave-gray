import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeModal } from '../features/modal/modalSlice'

const LoginModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickLogin() {
		dispatch(closeModal())
	}


	return (
<div className={style.container}>

  <div className={style.form}>
	<p>ログイン</p>
    <form>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
			<button onClick={() => clickLogin()}>ログイン</button>
      <p className={style.message}>Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
	)
}

export default LoginModal
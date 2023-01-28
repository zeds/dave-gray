import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeLogin } from '../features/modal/modalSlice'

const LoginModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickLogin() {
		dispatch(closeLogin())
	}


	return (
<div className={style.container}>

<div className={style.login_page}>
  <div className={style.form}>
	<p>かきくけこ</p>
    <form className={style.register_form}>
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p className={style.message}>Already registered? <a href="#">Sign In</a></p>
    </form>
    <form className={style.login_form}>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
			<button onClick={() => clickLogin()}>ログイン</button>
      <p className={style.message}>Not registered? <a href="#">Create an account</a></p>
    </form>
  </div>
</div>
</div>
	)
}

export default LoginModal
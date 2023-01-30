import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeModal } from '../feauters/modal/modalSlice';

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
      <input type="text" placeholder="ユーザー名"/>
      <input type="password" placeholder='パスワード'/>
			<button onClick={() => clickLogin()}>ログイン</button>
      <p className={style.message}> <a href="#">パスワードを忘れた方！</a>
       <a href="#">新規登録</a></p>
    </form>
  </div>
</div>
	)
}

export default LoginModal
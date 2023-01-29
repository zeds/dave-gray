import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeModal } from '../features/modal/modalSlice'

const IphoneModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickIphone() {
		dispatch(closeModal())
	}


	return (
<div className={style.container}>

  <div className={style.form}>
	<p>お困りの方へ</p>
    <form className={style['register-form']}>
      <input type="text" placeholder="name"/>
      <input type="text" placeholder="user nick name"/>
      <input type="text" placeholder="email address"/>
			<button onClick={() => clickIphone()}>送信する</button>
			<button onClick={() => clickIphone()}>チャットサポート</button>

      <p className={style.message}>Already registered? <a href="#">Sign In</a></p>
    </form>
  </div>
</div>
	)
}

export default IphoneModal
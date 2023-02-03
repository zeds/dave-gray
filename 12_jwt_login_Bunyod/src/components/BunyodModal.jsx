import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeModal } from '../features/modal/modalSlice'

const BunyodModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickBunyod() {
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
			<button onClick={() => clickBunyod()}>送信する</button>
			<button onClick={() => clickBunyod()}>チャットサポート</button>

      <p className={style.message}>Already registered? <a href="#">Sign In</a></p>
    </form>
  </div>
</div>
	)
}

export default BunyodModal
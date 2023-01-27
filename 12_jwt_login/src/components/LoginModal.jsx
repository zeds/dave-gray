import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeLogin } from '../features/modal/modalSlice'

const LoginModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

  const handleSubmit = () => {
		dispatch(closeLogin())
  }

	return (
<div className={style.container}>
  <section className={style.form} onSubmit={handleSubmit}>
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
      <button>login</button>
      <p className={style.message}>Not registered? <a href="#">Create an account</a></p>
    </form>
  </section>
</div>	
)
}

export default LoginModal
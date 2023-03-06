import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import style from './Modal.module.scss'
import { openModal } from '../features/modal/modalSlice'
import { useRegisterMutation } from '../features/products/productsSlice'

const RegisterModal = () => {
  const dispatch = useDispatch()
	const usernameRef = useRef()
	const emailRef = useRef()
	const passwordRef = useRef()

  const [register] = useRegisterMutation()

  const clickRegister = async (e) => {
    e.preventDefault()
    try {
      const credentials = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      console.log('credentials=', credentials)
      const userData = await register(credentials).unwrap()
      dispatch(openModal({ name: 'register', open: false }))
      dispatch(openModal({ name: 'login', open: true }))
    } catch (err) {
      console.log('エラー!!!LoginModal')
    }

    dispatch(openModal({ name: 'register', open: false }))
  }

  return (
    <div className={style.modal_container}
			onClick={() => {
				dispatch(openModal({ name: 'register', open: false }))
			}}

			>
      <div className={style.modal_form}
				onClick={(event) => {
					event.stopPropagation()
				}}
			>
        <p>Register</p>
        <form onSubmit={clickRegister}>
          <input
            type="text"
						ref={usernameRef}
            placeholder="name"
          />
          <input
            type="text"
						ref={emailRef}
            placeholder="email address"
          />
          <input
            type="password"
						ref={passwordRef}
            placeholder="password"
          />
          <button type="submit">register</button>
          <p className={style.message}>
            Already registered? <a href="#">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterModal

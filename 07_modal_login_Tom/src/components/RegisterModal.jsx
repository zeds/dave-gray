import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './Modal.module.scss'
import { openModal } from '../features/modal/modalSlice'
import { useRegisterMutation } from '../features/products/productsSlice'

const RegisterModal = ({ open }) => {
    if (!open) return null

    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [register, { isLoading }] = useRegisterMutation()

    const clickRegister = async (e) => {
        e.preventDefault()
        try {
            const credentials = {
                username: username,
                email: email,
                password: password,
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

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleEmailInput = (e) => setEmail(e.target.value)

    return (
        <div className={style.modal_container}>
            <div className={style.modal_form}>
                <p>Register</p>
                <form onSubmit={clickRegister}>
                    <input
                        type="text"
                        value={username}
                        onChange={handleUserInput}
                        placeholder="name"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePwdInput}
                        placeholder="password"
                    />
                    <input
                        type="text"
                        value={email}
                        onChange={handleEmailInput}
                        placeholder="email address"
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

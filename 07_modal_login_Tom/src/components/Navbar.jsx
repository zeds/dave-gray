import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import style from './Navbar.module.css'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import MenuModal from './MenuModal'
import { openModal } from '../features/modal/modalSlice'
import ThanksModal from './ThanksModal'

export const Navbar = () => {
  // call action
  const dispatch = useDispatch()

  // read state
  const { isLoginOpen, isRegisterOpen, isMenuOpen, isThanksOpen } = useSelector(
    (store) => store.modal
  )

  function clickLogin() {
    dispatch(openModal({ name: 'login', open: true }))
  }
  function clickRegister() {
    dispatch(openModal({ name: 'register', open: true }))
  }
  function clickMenu() {
    dispatch(openModal({ name: 'menu', open: true }))
  }

  return (
    <nav>
      <div className={style.burger} onClickCapture={clickMenu}>
        <div className={style.line1}></div>
        <div className={style.line2}></div>
        <div className={style.line3}></div>
      </div>
      <Link to="/" className="site-title">
        ホーム
      </Link>
      <ul>
        <CustomLink to="/shopping">お買い物</CustomLink>
        <CustomLink to="/admin">管理画面</CustomLink>
        <CustomLink to="/company">会社概要</CustomLink>
        <CustomLink to="/contact">お問い合わせ</CustomLink>
        <CustomLink to="/profile">プロフィール</CustomLink>
      </ul>
      <div className={style.user}>
        <button className={style.button} onClick={() => clickLogin()}>
          ログイン
        </button>
        <button className={style.button} onClick={() => clickRegister()}>
          新規登録
        </button>
      </div>
      {isLoginOpen ? <LoginModal /> : null}
      {isRegisterOpen ? <RegisterModal /> : null}
      {isMenuOpen ? <MenuModal /> : null}
      {isThanksOpen ? <ThanksModal /> : null}
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import style from './Navbar.module.css'
// import style from './MenuModal.module.css'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterLogin';
import MenuModal from './MenuModal';
import { openModal } from '../features/modal/modalSlice'
import { Icon } from '@iconify/react';

export const Navbar = () => {

	// call action
	const dispatch = useDispatch();

	// read state
	const { isLoginOpen, isRegisterOpen, isMenuOpen } = useSelector((store) => store.modal);

	function clickLogin() {
		dispatch(openModal({name:'login', open: true}))
	}

	function clickRegister() {
		dispatch(openModal({name:'register', open: true}))
	}
	function clickMenu() {
		dispatch(openModal({name:'menu', open: true}))
	}

	return (
		<nav>
			<button className={style.button1} onClick={() => clickMenu()}><Icon icon="ic:outline-menu" width="40"color='red' /></button>
			<Link to="/" className="site-title">ホーム</Link>
			<ul>
				<CustomLink to="/company">会社概要</CustomLink>
				<CustomLink to="/contact">お問い合わせ</CustomLink>
				<CustomLink to="/contact">採用情報</CustomLink>
				<CustomLink to="/contact">アクセス</CustomLink>
			</ul>
			<div className={style.user}>
				<button className={style.button} onClick={() => clickLogin()}>ログイン</button>
				<button className={style.button} onClick={() => clickRegister()}>新規登録</button>
			</div>
			<LoginModal open={isLoginOpen}/>
			<RegisterModal open={isRegisterOpen}/>
			<MenuModal open={isMenuOpen} />
		</nav>
	)
}

function CustomLink({ to, children, ...props}) {

	const resolvedPath = useResolvedPath(to)
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })

	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	)
}

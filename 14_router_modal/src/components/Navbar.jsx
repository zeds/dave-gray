import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import style from './Navbar.module.css'

export const Navbar = () => {
	return (
		<nav>
			<Link to="/" className="site-title">Welcome</Link>
			<ul>
				<CustomLink to="/company">会社概要</CustomLink>
				<CustomLink to="/contact">お問い合わせ</CustomLink>
			</ul>
			<div className={style.user}>
				<button className={style.button}>ログイン</button>
				<button className={style.button}>新規登録</button>
			</div>
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

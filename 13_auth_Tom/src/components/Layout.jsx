import { Outlet } from 'react-router-dom'
import style from './Layout.module.css'
import { Header } from './Header'
import { Footer } from './Footer'

const Layout = () => {
	return (
		<div className={style.container}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout
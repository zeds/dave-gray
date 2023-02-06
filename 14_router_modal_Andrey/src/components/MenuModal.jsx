import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import style from './MenuModal.module.scss'
import { openModal } from '../features/modal/modalSlice'
import { Icon } from '@iconify/react';

export const MenuModal = ({
	open
}) => {

	if (!open) return null
	const dispatch = useDispatch();

	function clickClose() {
		dispatch(openModal({ name: 'menu', open: false }))
	}

	return (
		<div onClick={(event) => {
			clickClose(event);
		}} className={style.container}>
			<div onClick={(event) => { event.stopPropagation() }} className={style.menu}>
				<a className={style.btn} onClick={() => clickClose()}><Icon icon="mdi:close-box-outline" width="50" /></a>
				<div className={style.links}>
					<Link to="/company" className={style.link}><Icon icon="mdi:company" width="25"/>会社概要</Link>
					<Link to="/contact" className={style.link}><Icon icon="mdi:message-processing-outline" width="25" />お問い合わせ</Link>
					<Link to="/company" className={style.link}><Icon icon="mdi:company" width="25"/>あいうえお</Link>
					<Link to="/contact" className={style.link}><Icon icon="mdi:message-processing-outline" width="25" />あいうえお</Link>

					<p>qwerty</p>
				</div>
			</div>
		</div>
	)
}

export default MenuModal
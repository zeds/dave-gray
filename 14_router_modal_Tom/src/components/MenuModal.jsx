import React from 'react'
import { useDispatch } from 'react-redux';
import style from './MenuModal.module.scss'
import { openModal } from '../features/modal/modalSlice'
import { Icon } from '@iconify/react';

export const MenuModal = ({
	open
}) => {

	if (!open) return null
	const dispatch = useDispatch();

	function clickClose() {
		dispatch(openModal({name:'menu',open:false}))
	}

	return (
		<div onClick={(event)=> {
			clickClose(event);
		}} className={style.container}>
			<div onClick={(event) => {event.stopPropagation()}} className={style.menu}>
				<a className={style.btn} onClick={()=>clickClose()}><Icon icon="mdi:close-box-outline" width="50" /></a>
				<div>
					<p><Icon icon="mdi:company" width="50" />会社概要</p>
					<p>お問い合わせ</p>
				</div>
			</div>
		</div>
	)
}

export default MenuModal
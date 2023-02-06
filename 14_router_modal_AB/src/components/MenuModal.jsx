import React from 'react'
import { useDispatch } from 'react-redux';
import style from './MenuModal.module.css'
import { openModal } from '../features/modal/modalSlice'
import { Icon } from '@iconify/react';

export const MenuModal = ({
	open
}) => {

	if (!open) return null
	const dispatch = useDispatch();

	function clickClose(e) {
		dispatch(openModal({name:'menu',open:false}))
	}

	return (
		<div className={style.container}>
			<div className={style.menu}>
				<button onClick={()=>clickClose()}><Icon icon="system-uicons:exit-left" width="40" /></button>
		
				<ul class={style.navbar}>
					<li><a href="http://localhost:5173/"><Icon icon="mdi:home-lightbulb-outline" width="30"color='red' />ホーム</a></li>
					<li><a href="http://localhost:5173/company"><Icon icon="mdi:company" width="30"color='red' />会社概要</a></li>
					<li><a href="http://localhost:5173/contact"><Icon icon="mdi:support" width="30"color='red' />お問い合わせ</a></li>
					<li><a href="#"><Icon icon="fluent-mdl2:recruitment-management" width="30"color='red' />採用情報</a></li>
					<li><a href="#"><Icon icon="ant-design:interation" width="30"color='red' />アクセス</a></li>
				</ul>
		

			</div>

			Menu
		</div>
	)
}

export default MenuModal
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
					<li><a href='http://localhost:5173/contact' className={style.btn} onClick={()=>clickClose()}><Icon icon="ri:customer-service-2-line" />サービス一覧</a></li>
					<li><a href='http://localhost:5173/company' className={style.btn} onClick={()=>clickClose()}><Icon icon="mdi:company" color="gray" rotate={1} inline={true} />会社</a></li>
					<li><a href='' className={style.btn} onClick={()=>clickClose()}><Icon icon="icon-park:plan" color="red" rotate={1} inline={true} />採用情報</a></li>
					<li><a href='' className={style.btn} onClick={()=>clickClose()}><Icon icon="majesticons:door-enter-line" color="red" rotate={1} inline={true} />アクセス</a></li>
				</div>
			</div>
		</div>
	)
}

export default MenuModal
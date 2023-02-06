import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import style from './MenuModal.module.scss'
import { openModal } from '../features/modal/modalSlice'
import { Icon } from '@iconify/react';
import TextLinkIcon from './TextLinkIcon'

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
				<TextLinkIcon iconify="mdi:company" text="会社概要" link="/company" />
				<TextLinkIcon iconify="ic:round-mail-outline" text="お問い合わせ" link="/contact" />
				<TextLinkIcon iconify="ic:round-mail-outline" text="プロフィール" link="/contact" />
				<TextLinkIcon iconify="ic:round-mail-outline" text="購入履歴" link="/contact" />
				<TextLinkIcon iconify="ic:round-mail-outline" text="グラフ表示" link="/contact" />
				<div>
					<ul>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MenuModal
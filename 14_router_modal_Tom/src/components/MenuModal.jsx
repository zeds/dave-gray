import React from 'react'
import { useDispatch } from 'react-redux';
import style from './MenuModal.module.css'
import { openModal } from '../features/modal/modalSlice'

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
				<button onClick={()=>clickClose()}>閉じる</button>
				<p>Company</p>
				<p>Contact</p>


			</div>

			Menu
		</div>
	)
}

export default MenuModal
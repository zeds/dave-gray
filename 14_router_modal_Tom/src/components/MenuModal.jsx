import React from 'react'
import { useDispatch } from 'react-redux';
import style from './Modal.module.css'
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
			Menu
			<button onClick={()=>clickClose()}>閉じる</button>
		</div>
	)
}

export default MenuModal
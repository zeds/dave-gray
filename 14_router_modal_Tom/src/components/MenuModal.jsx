import React from 'react'
import { useDispatch } from 'react-redux';
import style from './MenuModal.module.scss'
import { openModal } from '../features/modal/modalSlice'

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
			<div onClick={(event) => {
				event.stopPropagation()
			}}
				className={style.menu}>
				<button onClick={()=>clickClose()}>close</button>
			</div>
		</div>
	)
}

export default MenuModal
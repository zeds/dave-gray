import { useState } from 'react'
import { useDispatch } from 'react-redux';
import style from './MenuModal.module.css'
import { openModal } from '../features/modal/modalSlice'

export const MenuModal = ({
	open
}) => {

	if (!open) return null

	const [colorContainer, setColorContainer] = useState(true)
	//colorContainer = true
	//setColorContainer(false)

	const dispatch = useDispatch();

	function changeColor(e) {
		setColorContainer(!colorContainer)
	}

	function clickClose(e) {
		dispatch(openModal({name:'menu',open:false}))
	}

	return (
			<div className={colorContainer?style.color_container : style.container} id="container">
				<div className={style.menu}>
					<p>Company</p>
					<p>Contact</p>
				</div>
				<button onClick={()=>changeColor()}>色変更</button>
				<button onClick={()=>clickClose()}>閉じる</button>

				Menu
			</div>
	)
}

export default MenuModal
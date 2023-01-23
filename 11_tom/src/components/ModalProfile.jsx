import React from 'react'
import { closeProfile } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux';

const ModalProfile = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();


	return (
		<>
			<div>ModalProfile</div>
			<button
				onClick={() => {
					dispatch(closeProfile())
				}}
			>閉じる</button>
		</>
	)
}

export default ModalProfile
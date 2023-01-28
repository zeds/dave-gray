import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import style from './LoginModal.module.css'
import { closeModal } from '../feauters/modal/modalSlice';

const FacbookModal = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	function clickFacbook() {
		dispatch(closeModal())
	}


	return (
<div className={style.container}>

  <div className={style.form}>
	<p>新規登録</p>
    <form>
      
    </form>
  </div>
</div>
	)
}

export default FacbookModal
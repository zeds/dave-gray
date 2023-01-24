import React from 'react'
import { closeProfile } from '../../features/modal/modalSlice'
import { useDispatch } from 'react-redux';
import style from "./ModalProfile.module.css"

const ModalProfile = ({
  open
}) => {

  if (!open) return null

  const dispatch = useDispatch();

  return (
    <div className={style.modal}>
      <div className={style.modal__content}>

        <p>Profile</p>

        <button
          type='button'
          // className='modal_confirm_button modal_confirm_button_cancel'
          onClick={() => {
            dispatch(confirmChanges());
          }}
        >
          Yes
        </button>
        <button
          type='button'
          // className='modal_confirm_button modal_confirm_button_yes'
          onClick={() => {
            dispatch(closeProfile())
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}

export default ModalProfile
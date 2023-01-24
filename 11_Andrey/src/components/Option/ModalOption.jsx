import React from 'react'
import { closeOption } from '../../features/modal/modalSlice'
import { useDispatch } from 'react-redux';
import style from "./ModalOption.module.css"

const ModalOption = ({
  open
}) => {

  if (!open) return null

  const dispatch = useDispatch();

  return (
    <div className={style.modal}>
      <div className={style.modal__content}>

        <p>設定</p>
        <div className={style.modal__checkboxs}>
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
            Checkbox 1
          </label>
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
            Checkbox 1
          </label>
          <label className="form-control">
            <input type="checkbox" name="checkbox" />
            Checkbox 1
          </label>
        </div>

        <div>
          <p></p>
          <button
            type='button'
            // className='modal_confirm_button modal_confirm_button_cancel'
            onClick={() => {
              dispatch(closeOption());
            }}
          >
            Yes
          </button>
          <button
            type='button'
            // className='modal_confirm_button modal_confirm_button_yes'
            onClick={() => {
              dispatch(closeOption())
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalOption
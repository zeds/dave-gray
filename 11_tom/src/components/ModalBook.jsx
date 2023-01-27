import React from 'react'
import { closeBook } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux';

const ModalBook = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	return (
    <aside className='modal_container'>
      <div className='modal_confirm'>
			<p>Bunyod</p>
        <div className='modal_confirm_button_container'>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_cancel'
            onClick={() => {
              dispatch(closeBook());
            }}
          >
            Cancel
          </button>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_yes'
						onClick={() => {
							dispatch(closeBook())
						}}
          >
            Yes
          </button>
        </div>
      </div>
    </aside>
	)
}


export default ModalBook
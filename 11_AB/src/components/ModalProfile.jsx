import React from 'react'
import { closeProfile } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux';

const ModalProfile = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	return (
    <aside className='modal_container'>
      <div className='modal_confirm'>
			<p>Profile</p>
        <div className='modal_confirm_button_container'>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_cancel'
            onClick={() => {
              dispatch(closeProfile());
            }}
          >
            Cancel
          </button>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_yes'
						onClick={() => {
							dispatch(closeProfile())
						}}
          >
            Yes
          </button>
        </div>
      </div>
    </aside>
	)
}

export default ModalProfile
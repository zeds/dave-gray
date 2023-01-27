import React from 'react'
import { closeSos } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux';

const ModalSos = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	return (
    <aside className='modal_container'>
      <div className='modal_confirm'>
			<p>Sos</p>
        <div className='modal_confirm_button_container'>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_cancel'
            onClick={() => {
              dispatch(closeSos());
            }}
          >
            Cancel
          </button>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_yes'
						onClick={() => {
							dispatch(closeSos())
						}}
          >
            Yes
          </button>
        </div>
      </div>
    </aside>
	)
}


export default ModalSos
import React from 'react'
import { closeMenyu} from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux';

const ModalMenyu = ({
	open
}) => {

	if (!open) return null

	const dispatch = useDispatch();

	return (
    <aside className='modal_container'>
      <div className='modal_confirm'>
			<p>menyu</p>
        <div className='modal_confirm_button_container'>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_cancel'
            onClick={() => {
              dispatch(closeMenyu());
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

export default ModalMenyu
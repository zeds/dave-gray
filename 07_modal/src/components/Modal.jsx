import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

import { useDeleteProductMutation } from '../features/products/productsSlice'

const Modal = ({
	open,
	title
}) => {

	if (!open) return null

	const dispatch = useDispatch();
	const { body } = useSelector((store) => store.modal);

	const [deleteProduct] = useDeleteProductMutation()


  return (
    <aside className='modal_container'>
      <div className='modal_confirm'>
			<p>{title}</p>
			<p>{body}</p>

        <div className='modal_confirm_button_container'>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_cancel'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_yes'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;

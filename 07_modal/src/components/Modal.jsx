import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';




const Modal = ({
	open,
	title
}) => {

	if (!open) return null

	const dispatch = useDispatch();
	const { body } = useSelector((store) => store.modal);

  return (
    <aside className='modal-container'>
      <div className='modal'>
			<p>{title}</p>
			<p>{body}</p>
        {/*<h4>remove all items from your shopping cart?</h4>*/}
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
					alert("confirm")
            //  dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;

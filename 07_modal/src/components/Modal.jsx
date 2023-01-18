import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';

const Modal = ({
	open,
	title,
	handleYes
}) => {

	if (!open) return null

	//actionを呼び出す
	const dispatch = useDispatch();

	//storeからリアルタイムにstateを取得する
	//このモーダルを呼び出す親がstate.bodyを設定する
	const { body } = useSelector((store) => store.modal);

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
							handleYes()
							dispatch(closeModal())
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

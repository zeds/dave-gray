import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { useDeleteProductMutation } from '../features/products/productsSlice';

const Modal = ({
	open,
	title
}) => {

	if (!open) return null

	//actionを呼び出す
	const dispatch = useDispatch();

	//削除API
	const [deleteProduct] = useDeleteProductMutation()

	//storeからリアルタイムにstateを取得する
	//このモーダルを呼び出す親がstate.nameを設定する
	const { id, name } = useSelector((store) => store.modal);

  return (
    <aside className='modal_container'>
      <div className='modal_confirm'>
			<p>{title}</p>
			<p>{name}</p>
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
							deleteProduct({id: id})
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

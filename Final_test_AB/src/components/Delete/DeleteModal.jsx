import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';
import { useDeleteProductMutation } from '../../features/products/productsSlice';
import style from './Modal.module.scss'

const Modal = ({
	open
}) => {

	if (!open) return null

	//actionを呼び出す
	const dispatch = useDispatch();

	const { title } = useSelector((store) => store.modal);

	//削除API
	const [deleteProduct] = useDeleteProductMutation()

	//storeからリアルタイムにstateを取得する
	//このモーダルを呼び出す親がstate.nameを設定する
	const { id, name } = useSelector((store) => store.modal);

  return (
    <aside className={style.modal_container}>
      <div className={style.modal_box}>
				<p>{title}</p>
				<p>{name}</p>
        <div className={style.modal_confirm_button_container}>
          <button
            type='button'
            className={`${style.modal_confirm_button} ${style.modal_confirm_button_cancel}`}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
          <button
            type='button'
            className={`${style.modal_confirm_button} ${style.modal_confirm_button_yes}`}
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

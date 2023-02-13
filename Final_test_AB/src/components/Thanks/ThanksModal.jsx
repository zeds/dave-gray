import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';
import { useDeleteProductMutation } from '../../features/products/productsSlice';
import style from './Modal.module.scss'
import { Link } from 'react-router-dom'


const ThanksModal = ({
	open
}) => {

	if (!open) return null

	//actionを呼び出す
	const dispatch = useDispatch();

	const { title } = useSelector((store) => store.modal);


	//storeからリアルタイムにstateを取得する
	//このモーダルを呼び出す親がstate.nameを設定する
	const { id, name } = useSelector((store) => store.modal);

	function clickLink() {
		dispatch(openModal({name:'thanks',open:false}))
	}

  return (
    <aside className={style.modal_container}>
      <div className={style.modal_box}>
				<p>{title}</p>
				<p>{name}</p>
				<Link className={style.link} onClick={()=>clickLink()} to='/shopping'>ショッピングに戻る</Link>
      </div>
    </aside>
  );
};
export default ThanksModal;

import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../features/modal/modalSlice';
import { useUpdateProductMutation, useAddProductMutation } from '../../features/products/productsSlice';
import style from './Modal.module.scss'

const ProductModal = ({
	open // true / false
}) => {
	if (!open) return

	const dispatch = useDispatch();

	const { title, id, pos, name, price, publish, stock, type } = useSelector((store) => store.modal);
	const [localPos, setLocalPos] = useState(pos)
	const [localName, setLocalName] = useState(name)
	const [localPrice, setLocalPrice] = useState(price)
	const [localStock, setLocalStock] = useState(stock)
	const [localPublish, setLocalPublish] = useState(publish)

	console.log("pos=", localPos)

	//新規API
	const [addProduct] = useAddProductMutation()

	//更新API
	const [updateProductt] = useUpdateProductMutation()

	const clickCheckbox = (e) => {
		let tmp = localPublish;
		setLocalPublish(!tmp)
	}

	return (
		<div className={style.modal_container}>

			<div className={style.modal_box}>
				<div className={style.modal_product_title}>
					{title}
				</div>

				<div className={style.modal_product_pos}>
					<label htmlFor="product-pos">表示位置</label>
					<input
						type="number"
						id="product-pos"
						value={localPos}
						onChange={(e) => setLocalPos(e.target.value)}
						placeholder="表示位置"
					/>
				</div>


				<div className={style.modal_product_name}>
					<label htmlFor="product-name">商品名</label>
					<input
						type="text"
						id="product-name"
						value={localName}
						onChange={(e) => setLocalName(e.target.value)}
						placeholder="商品名は100文字まで"
					/>
				</div>

				<div className={style.modal_product_price}>
					<label htmlFor="product-price">価格</label>
					<input
						type="number"
						id="product-price"
						value={localPrice}
						onChange={(e) => setLocalPrice(e.target.value)}
						placeholder="300円以上"
					/>
				</div>
				<div className={style.modal_product_stock}>
					<label htmlFor="product-stock">在庫数</label>
					<input
						type="number"
						id="product-stock"
						value={localStock}
						onChange={(e) => setLocalStock(e.target.value)}
						placeholder="在庫数"
					/>
				</div>

				{/*<div>
					<input
						type="checkbox"
						id="checkbox"
						checked={localPublish}
						onChange={(e) => clickCheckbox(e)}
					/>公開
			  </div>
*/}
			<div className={style.modal_confirm_button_container}>
				<button
					type='button'
					className={`${style.modal_confirm_button} ${style.modal_confirm_button_cancel}`}
					onClick={() => {
						dispatch(closeModal());
					}}
				>
					キャンセル
				</button>
				<button
					type='button'
					className={`${style.modal_confirm_button} ${style.modal_confirm_button_yes}`}
					onClick={() => {
						let body = {
							data: {
								pos: localPos,
								name: localName,
								price: localPrice,
								stock: localStock,
								publish: localPublish
							}
						}
						if (type === 'edit') {
							updateProductt({ id: id, body})
						} else {
							addProduct({ body })
						}
						dispatch(closeModal())
					}}
				>
					投稿
				</button>
			</div>
		</div>
	</div>

	)
}

export default ProductModal
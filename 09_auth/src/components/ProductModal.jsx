import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { useUpdateProductMutation, useAddProductMutation } from '../features/products/productsSlice';

const ProductModal = ({
	open
}) => {
	if (!open) return
	const dispatch = useDispatch();

	const { title, id, name, price, publish, type } = useSelector((store) => store.modal);
	const [localName, setLocalName] = useState(name)
	const [localPrice, setLocalPrice] = useState(price)
	const [localPublish, setLocalPublish] = useState(publish)

	//新規API
	const [addProduct] = useAddProductMutation()

	//更新API
	const [updateProductt] = useUpdateProductMutation()

	const clickCheckbox = (e) => {
		let tmp = localPublish;
		setLocalPublish(!tmp)
	}

	return (
		<div className='modal_container'>

			<div className="modal_product">
				<div className='modal_product_title'>
					{title}
				</div>

				<div className="modal_product_name">
					<label htmlFor="product-name">商品名</label>
					<input
						type="text"
						id="product-name"
						value={localName}
						onChange={(e) => setLocalName(e.target.value)}
						placeholder="商品名は100文字まで"
					/>
				</div>

				<div className="modal_product_price">
					<label htmlFor="product-price">価格</label>
					<input
						type="number"
						id="product-price"
						value={localPrice}
						onChange={(e) => setLocalPrice(e.target.value)}
						placeholder="300円以上"
					/>
				</div>

				<div>
					<input
						type="checkbox"
						id="checkbox"
						checked={localPublish}
						onChange={(e) => clickCheckbox(e)}
					/>公開
			  </div>

			<div className='modal_confirm_button_container'>
				<button
					type='button'
					className='modal_confirm_button modal_confirm_button_cancel'
					onClick={() => {
						dispatch(closeModal());
					}}
				>
					キャンセル
				</button>
				<button
					type='button'
					className='modal_confirm_button modal_confirm_button_yes'
					onClick={() => {
						let body = {
							data: {
								name: localName,
								price: localPrice,
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
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { closeEdit } from '../features/modal/modalSlice';
import { useUpdateProductMutation } from '../features/products/productsSlice';

const ProductModal = ({
	open,
	title
}) => {
	if (!open) return
	const dispatch = useDispatch();

	const { id, name, price, publish } = useSelector((store) => store.modal);
	const [localName, setLocalName] = useState(name)
	const [localPrice, setLocalPrice] = useState(price)
	const [localPublish, setLocalPublish] = useState(publish)

	//更新API
	const [updateProduct] = useUpdateProductMutation()

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

				商品名
				<input type="text"></input>
				価格
				<input type="number"></input>
				<input type="checkbox"></input>公開


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
						dispatch(closeEdit());
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
						updateProduct({ id: id, body})
						dispatch(closeEdit())
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
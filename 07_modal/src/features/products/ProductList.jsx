import {
	useGetProductsQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} from './productsSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload, faPencilSquare } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react"
import Modal from '../../components/Modal'
import ProductModal from '../../components/ProductModal';
import { openModal, openEdit } from '../modal/modalSlice';

const ProductList = () => {
	const dispatch = useDispatch();

	const [newProduct, setNewProduct] = useState('')
	const [newPrice, setNewPrice] = useState('')

	const { isOpen, isOpenEdit, name } = useSelector((store) => store.modal);


	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetProductsQuery()
	const [addProduct] = useAddProductMutation()
	const [updateProduct] = useUpdateProductMutation()

	const handleUpdate = (e) => {
		let body = {
			data: {
				publish: !e.attributes.publish
			}
		}
		updateProduct({ id: e.id, body} )
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		let body = {
			data: {
				name: newProduct,
				price: newPrice,
				publish: true
			}
		}
		addProduct({ body })
  }

//編集
const handleEdit = (e) => {
	let action = {
		id: e.id,
		name: e.attributes.name,
		price: e.attributes.price,
		publish: e.attributes.publish
	}
	dispatch(openEdit(action));
}

//削除
  const handleDelete = (e) => {
		let action = {
			id: e.id,
			name: e.attributes.name,
		}
		dispatch(openModal(action));
  }

//新規追加
	const newItemSection =
		 <form onSubmit={handleSubmit}>
			  <label htmlFor="new-todo">Enter a new product item</label>
			  <div className="new-todo">
					<input
						 type="text"
						 id="new-todo"
						 value={newProduct}
						 onChange={(e) => setNewProduct(e.target.value)}
						 placeholder="商品名"
					/>
					<input
						 type="number"
						 id="new-price"
						 value={newPrice}
						 onChange={(e) => setNewPrice(e.target.value)}
						 placeholder="価格"
					/>
			  </div>

			  <button className="submit">
					<FontAwesomeIcon icon={faUpload} />
			  </button>
		 </form>



	let content;
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isSuccess) {
		content = products.data.map(product => { //JSON.stringify(products)
			return (
				 <article key={product.id}>
					{/*checkbox*/}
					  <div className="product">
							<input
								 type="checkbox"
								 checked={product.attributes.publish}
								 id={product.id}
								 onChange={() => handleUpdate({ ...product})}
							/>
					{/*商品名*/}
							<label htmlFor={product.id}>{product.attributes.name}</label>
							<span>　¥{Number(product.attributes.price).toLocaleString()}円</span>
					  </div>
						{/*編集ボタン*/}
						<button className="trash" onClick={() => handleEdit({ ...product })}>
							<FontAwesomeIcon icon={faPencilSquare} />
					  </button>
						{/*削除ボタン*/}
						<button className="trash" onClick={() => handleDelete({ ...product })}>
							<FontAwesomeIcon icon={faTrash} />
					  </button>
				 </article>
			)
	  })
	} else if (isError) {
		content = <p>{error}</p>
	}

	return (
		 <main>
			  <h1>メルカリ商品一覧</h1>
			  <Modal open={isOpen} title='削除してもよろしいですか？' />
				<ProductModal open={isOpenEdit} title='商品情報編集'/>

			  {newItemSection}
			  {content}
		 </main>
	)
}
export default ProductList
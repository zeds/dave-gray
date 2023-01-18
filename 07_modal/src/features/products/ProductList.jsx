import {
	useGetProductsQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} from './productsSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'


import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react"
import Modal from '../../components/Modal'
import { openModal, closeModal } from '../modal/modalSlice';


const ProductList = () => {
	const dispatch = useDispatch();

	const [newProduct, setNewProduct] = useState('')
	const [newPrice, setNewPrice] = useState('')
	const [targetId, setTargetId] = useState(0)

	const { isOpen } = useSelector((store) => store.modal);


	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetProductsQuery()
	const [addProduct] = useAddProductMutation()
	const [updateProduct] = useUpdateProductMutation()
	const [deleteProduct] = useDeleteProductMutation()
	console.log("products=", products)

	const handleUpdate = (e) => {
		console.log("e=", e)
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

//  削除
  const handleDelete = (e) => {
		setTargetId(e.id)
		let action = {
			body: e.attributes.name,
		}
		dispatch(openModal(action));
  }

  function handleYes() {
		deleteProduct({id:targetId})
  }

//  新規追加
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
					{/*削除ボタン*/}
						{/*<button className="trash" onClick={() => deleteProduct({ id: product.id })}>*/}
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
			  <Modal open={isOpen} handleYes={handleYes} title='削除してもよろしいですか？' />

			  {newItemSection}
			  {content}
		 </main>
	)
}
export default ProductList
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

import DeleteModal from '../../components/DeleteModal'
import ProductModal from '../../components/ProductModal';
import LoginModal from '../../components/LoginModal';


import { openDelete, openProduct, openLogin } from '../modal/modalSlice';

const ProductList = () => {
	const dispatch = useDispatch();

	const [newProduct, setNewProduct] = useState('')
	const [newPrice, setNewPrice] = useState('')

	const { isDeleteOpen, isProductOpen, isLoginOpen } = useSelector((store) => store.modal);


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

//ログイン
const clickLogin = (e) => {
	dispatch(openLogin());
}

	//新規
const clickNew = (e) => {
	//e.preventDefault();
	console.log("openNew")
	let action = {
		id: e.id,
		name: '',
		price: 300,
		publish: true,
		title: '商品情報-新規',
		type: 'new'
	}
	dispatch(openProduct(action));
}

//編集
const handleEdit = (e) => {
	let action = {
		id: e.id,
		name: e.attributes.name,
		price: e.attributes.price,
		publish: e.attributes.publish,
		title: '商品情報-編集',
		type: 'edit'
	}
	dispatch(openProduct(action));
}

//削除
  const handleDelete = (e) => {
		console.log("削除")
		let action = {
			id: e.id,
			name: e.attributes.name,
			title: '削除しても宜しいですか？'
		}
		dispatch(openDelete(action));
  }

//新規追加
	const newItemSection =
	<div>
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
	</div>



	let content;
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isSuccess) {
		content = products.data.map(product => { //JSON.stringify(products)
			return (
				<article key={product.id}>
					<div className='row_top'>
						<input
							type="checkbox"
							checked={product.attributes.publish}
							id={product.id}
							onChange={() => handleUpdate({ ...product})}
						/>
						<label htmlFor={product.id}>{product.attributes.name}</label>
					</div>
					<div className='row_bottom'>
						<span>　 ¥{Number(product.attributes.price).toLocaleString()}円</span>
						<div className='row_icon'>
							<button className="trash" onClick={() => handleEdit({ ...product })}>
								<FontAwesomeIcon icon={faPencilSquare} />
							</button>
							<button className="trash" onClick={() => handleDelete({ ...product })}>
								<FontAwesomeIcon icon={faTrash} size="lg" />
							</button>
						</div>
					</div>
				</article>
			)
	  })
	} else if (isError) {
		content = <p>{error}</p>
	}

	return (
		 <main>
			  <h1>メルカリ商品一覧</h1>

			  <DeleteModal open={isDeleteOpen} />
				<ProductModal open={isProductOpen} />
				<LoginModal open={isLoginOpen} />

			  {newItemSection}
				<div className="login">
					<button onClick={(e) => clickLogin(e)}>ログイン</button>
				</div>

				<div className="post">
					<button onClick={(e) => clickNew(e)}>出品</button>
				</div>
			  {content}
		 </main>
	)
}
export default ProductList
import {
	useGetProductsQuery,
	useAddProductMutation,
	useUpdateProductMutation
} from './productsSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload, faPencilSquare } from '@fortawesome/free-solid-svg-icons'

import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react"
import { Link} from 'react-router-dom'

import DeleteModal from '../../components/Delete/DeleteModal'
import ProductModal from '../../components/Product/ProductModal';
import style from './ProductList.module.css'


import { openDelete, openProduct} from '../modal/modalSlice';

const ProductList = () => {
	const dispatch = useDispatch();

	const [newProduct, setNewProduct] = useState('')
	const [newPrice, setNewPrice] = useState('')

	const { isDeleteOpen, isProductOpen } = useSelector((store) => store.modal);

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

//新規
const clickNew = (e) => {
	//e.preventDefault();
	console.log("openNew")
	let action = {
		id: e.id,
		pos: 0,
		name: '',
		price: 300,
		stock: 0,
		publish: true,
		title: '商品情報-新規だよー',		
		type: 'new'
	}
	dispatch(openProduct(action));
}

//編集
const handleEdit = (e) => {
	let action = {
		id: e.id,
		pos: e.attributes.pos,
		name: e.attributes.name,
		price: e.attributes.price,
		stock: e.attributes.stock,
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

	let content;
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isSuccess) {
		content = products.data.map(product => { //JSON.stringify(products)
			return (
				<div className={style.grid_container} key={product.id}>
				{/*<article key={product.id}>*/}
					<div>{product.attributes.pos}</div>
					<span>商品画像</span>
					<span>{product.attributes.name}</span>
					<span>　 ¥{Number(product.attributes.price).toLocaleString()}円</span>
					<span>{product.attributes.stock}</span>
					<Link to={`/sales_by_product/${product.id}`} >合計売上</Link>
					<button className="trash" onClick={() => handleEdit({ ...product })}>
						<FontAwesomeIcon icon={faPencilSquare} />
					</button>
					<button className="trash" onClick={() => handleDelete({ ...product })}>
						<FontAwesomeIcon icon={faTrash} size="lg" />
					</button>
				{/*</article>*/}
				</div>
			)
	  })
	} else if (isError) {
		content = <p>{error}</p>
	}

	return (
		 <main>
			  <h1>商品一覧</h1>
			  

			  <DeleteModal open={isDeleteOpen} />
				<ProductModal open={isProductOpen} />

				<div className="post">
					<button onClick={(e) => clickNew(e)}>出品</button>
				</div>
			  {content}
		 </main>
	)
}
export default ProductList
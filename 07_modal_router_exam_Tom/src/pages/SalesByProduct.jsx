import React, {useState} from 'react'
import { useParams, Link } from 'react-router-dom'
import style from './SalesByProduct.module.scss'
import {useGetProductHistoryQuery } from '../features/products/productsSlice'
/*
	productsSliceに購入履歴を呼び出すためのapiを追加する
*/

export const SalesByProduct = () => {

	const [count, setCount] = useState(false)
	///api/product-purchase-histories
	const params = useParams();
	console.log("params=", params.productId)

	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetProductHistoryQuery(params.productId)


	let content
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isSuccess) {
		let count = products.data.length;
		if ( !count ){
			return(<div>
				<div>売上はありません</div>
					<Link to='/admin'>戻る</Link>
				</div>
			)
		}
		content = products.data.map(product => {
			console.log("## product=", product)

			return (
				<div className={style.grid_container} key={product.id}>
					<div>
						{product.attributes.product.data.id}
					</div>
					<div>
						{product.attributes.product.data.attributes.name}
					</div>
					<div>
						{product.attributes.user.data.attributes.email}
					</div>
					<div>
						{product.attributes.quantity}
					</div>
					<div>
						{product.attributes.createdAt}
					</div>
				</div>
			)
		})
	} else if (isError) {
		content = <p>{error}</p>
	}


	return (
		<div className={style.container}>
			<div className={style.frame}>

				{content}
				<Link to='/admin'>戻る</Link>

				{/*<div>product_id</div>
				<div>商品名</div>
				<div>購入者 email</div>
				<div>個数</div>
				<div>購入日時</div>

				<div>product_id</div>
				<div>商品名</div>
				<div>購入者 email</div>
				<div>個数</div>
				<div>購入日時</div>

				{content}*/}
			</div>

		</div>
	)
}

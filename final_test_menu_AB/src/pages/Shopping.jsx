import React from 'react'
import style from './Shopping.module.scss'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import {
	useGetProductsQuery,
} from '../features/products/productsSlice'

import image_product from '../assets/BMW.jpeg'

export const Shopping = () => {


	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetProductsQuery()

	console.log("products=", products)


	function clickCart() {
		alert("aasaa")

	}

	let content;
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isSuccess) {
		content = products.data.map(product => { //JSON.stringify(products)
			return (
				<div className={style.box} key={product.id}>
					<div className={style.item_image}>
						<img src={image_product} alt="product" />
					</div>
					<div className={style.item_name}>
						{product.attributes.name}
					</div>
					<div className={style.item_price}>
						¥{Number(product.attributes.price).toLocaleString()}円(税込)
					</div>
					<div className={style.item_button}>
						<Link to={`/purchase/${product.id}`}>
							<button>カートに入れる</button>
						</Link>
					</div>
				</div>
			)
	  })
	} else if (isError) {
		content = <p>{error}</p>
	}


					//<Link to={`/purchase/${product.id}`}>カートに入れる </Link>

	return (
		<div>
			お買い物
			<div className={style.grid_container}>
				{content}
			</div>
		</div>
	)
}

import React from 'react'
import style from './Shopping.module.scss'
import { useState } from "react"

import { Link } from 'react-router-dom'
import {
	useGetProductsQuery,
} from '../features/products/productsSlice'

import image_product from '../assets/product.png'

import MockData from './MockData.json'

export const Shopping = () => {

	//初期表示では、価格が安い順に並べる
	let [orderType, setOrderType] = useState('price')
	const [order, setOrder] = useState("ASC")

	const {
		data: products,
		isLoading,
		isSuccess,
		isError,
		error
	} = useGetProductsQuery()

	const changeValue = (e) => {
		setOrderType(e.target.value)
		prepareContent()
	}

	function orderDirection(){
		if (order === 'ASC'){
			setOrder('DSC')
		}else{
			setOrder('ASC')
		}
	}

	let content
	if (isLoading) {
		content = <p>Loading...</p>
	} else if (isSuccess) {
		prepareContent()
	} else if (isError) {
		content = <p>{error}</p>
	}

	// name, stock, price
	function prepareContent() {
		let cp = [...products.data]
		let sp
		if (orderType === 'price'){
			if (order === 'ASC'){
				sp = cp.sort((a,b) => parseInt(a.attributes.price) > parseInt(b.attributes.price) ? 1 : -1)
			}else{
				sp = cp.sort((a,b) => parseInt(a.attributes.price) < parseInt(b.attributes.price) ? 1 : -1)
			}
		}else{
			if (orderType === 'stock'){
				if (order === 'ASC'){
					sp = cp.sort((a,b) => a.attributes.stock > b.attributes.stock ? 1 : -1)
					console.log("sp=", sp)
				}else{
					sp = cp.sort((a,b) => a.attributes.stock < b.attributes.stock ? 1 : -1)
				}
			}else{
				if (orderType === 'name'){
					if (order === 'ASC'){
						console.log("ASC")
						sp = cp.sort((a,b) => a.attributes.name.toLowerCase() < b.attributes.name.toLowerCase() ? 1 : -1)
					}else{
						sp = cp.sort((a,b) => a.attributes.name.toLowerCase() > b.attributes.name.toLowerCase() ? 1 : -1)
						console.log("DSC")
					}
				}
			}
		}

		content = sp.map(product => { //JSON.stringify(products)
				let image_url = image_product
				if ( product.attributes.image.data != null ){
					let image_name = product.attributes.image.data[0].attributes.url
					console.log("image_name=", image_name)
					image_url = 'https://lusty.asia:1443' + image_name
				}
				return (
				<div className={style.box} key={product.id}>
					<div className={style.item_image}>
						<img src={image_url} alt="product" />
					</div>
					<div className={style.item_name}>
						{product.attributes.name}
					</div>
					<div className={style.item_price}>
						<div>在庫数：{product.attributes.stock}</div>
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
	}

	return (
		<div>
			<div>お買い物</div>
			<div className={style.sort}>
				<button onClick={()=>orderDirection()}>並び順:{order}</button>
				<select value={orderType} onChange={changeValue}>
					<option value="price">価格順</option>
					<option value="name">名前順</option>
					<option value="stock">在庫順</option>
				</select>
			</div>
			<div className={style.grid_container}>
				{content}
			</div>
		</div>
	)
}
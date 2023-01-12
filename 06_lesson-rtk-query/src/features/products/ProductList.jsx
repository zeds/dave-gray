import {
	useGetProductsQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} from './productsSlice'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

const ProductList = () => {
	const [newProduct, setNewProduct] = useState('')

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
				publish: true
			}
		}
		addProduct({ body })
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
					  <div className="product">
							<input
								 type="checkbox"
								 checked={product.attributes.publish}
								 id={product.id}
								 onChange={() => handleUpdate({ ...product})}
							/>
							<label htmlFor={product.id}>{product.attributes.name}</label>
					  </div>
					  <button className="trash" onClick={() => deleteProduct({ id: product.id })}>
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
			  {newItemSection}
			  {content}
		 </main>
	)
}
export default ProductList
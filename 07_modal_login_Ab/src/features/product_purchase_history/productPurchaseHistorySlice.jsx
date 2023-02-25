import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productPurchaseHistorySlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://lusty.asia:1443/api' }),
	tagTypes: ['Products'], 
	endpoints: (builder) => ({
		getPurchaseById: builder.query({
			query: (id) => ({
				url: `/product-purchase-histories/${id}`,
				providesTags: ['product-purchase-histories']
			})
		}),
		getProducts: builder.query({
			query: () => '/products?sort=stock',
			providesTags: ['Products']
		}),
		addPurchaseHistory: builder.mutation({
			query: (product) => ({
				url: '/product-purchase-histories',
				method: 'POST',
				body: product.body
			}),
			invalidatesTags: ['Products']
		}),
		updateProduct: builder.mutation({
			query: (product) => ({
				url: `/products/${product.id}`,
				method: 'PUT',	//PUT: replacing the full record, PATCH: updating the part of record.
				body: product.body
			}),
			invalidatesTags: ['Products']
		}),
		deleteProduct: builder.mutation({
			query: ({ id }) => ({
				url: `/Products/${id}`,
				method: 'DELETE',
				body: id
			}),
			invalidatesTags: ['Products']
		})
	})
})

export const {
	useGetPurchaseByIdQuery,
	useGetProductsQuery,
	useAddPurchaseHistoryMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} = productPurchaseHistorySlice

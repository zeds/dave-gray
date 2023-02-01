import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://lusty.asia:1443/api' }),
	tagTypes: ['Products'], 
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => '/products',
			//transformResponse: res => res.sort((a, b) => b.id - a.id),
			providesTags: ['Products']
		}),
		addProduct: builder.mutation({
			query: (product) => ({
				url: '/products',
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
	useGetProductsQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} = productsSlice

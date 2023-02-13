import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://lusty.asia:1443/api' }),
	tagTypes: ['Products'], 
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: '/auth/local',
				method: 'POST',
				body: credentials
			}),
		}),
		getUserHistory: builder.query({
			query: (email) => ({
				url: `/product-purchase-histories?filters[user][email][$eq]=${email}&populate=product,user`,
				providesTags: ['ProductPurchaseHistory']
			})
		}),
		getProductHistory: builder.query({
			query: (id) => ({
				url: `/product-purchase-histories?filters[product][id][$eq]=${id}&populate=product,user`,
				providesTags: ['ProductPurchaseHistory']
			})
		}),
		getProductById: builder.query({
			query: (id) => ({
				url: `/products/${id}`,
				providesTags: ['Products']
			})
		}),
		getProducts: builder.query({
			query: () => '/products?populate=*',
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
		updateStock: builder.mutation({
			query: (id) => ({
				url: `/products/${id}`,
				providesTags: ['Products']
			})

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
	useLoginMutation,
	useGetUserHistoryQuery,
	useGetProductHistoryQuery,
	useGetProductByIdQuery,
	useGetProductsQuery,
	useAddProductMutation,
	useUpdateProductMutation,
	useDeleteProductMutation
} = productsSlice

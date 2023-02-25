import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

/**
 Oh, bonus: you should not create an extra api
  per resource. You should have one single createApi call
  in your application in almost all cases - you can still split it up over multiple files using Code Splitting.

・RTK-Query is a full cache solution - so you should usually not copy state of it. Let RTK-Query to manage it.
・Use mutation to save it back to server.
・Mutation are used to send data updated to the server and apply the changes to the local caches.
・createApiはアプリに1つだけにした方が良さそうだ
　しかし、dave-grayはusesApiSliceを既存のapiSliceにinjectしている。
　45分から
　https://www.youtube.com/watch?v=-JJFQ9bkUbo
　users/usesApiSliceはproductsSliceにinjectして作成した。
・postしたら、fetchしてlocalのcacheを変更する？

	https://stackoverflow.com/questions/68612556/how-to-store-the-result-of-query-from-createapi-in-a-slice
**/

export const productsSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://lusty.asia:1443/api" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/local",
        method: "POST",
        body: credentials,
      }),
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/users",
        method: "POST",
        body: credentials,
      }),
    }),
    getUserHistory: builder.query({
      query: (email) => ({
        url: `/product-purchase-histories?filters[user][email][$eq]=${email}&populate=product,user`,
        providesTags: ["ProductPurchaseHistory"],
      }),
    }),
    getProductHistory: builder.query({
      query: (id) => ({
        url: `/product-purchase-histories?filters[product][id][$eq]=${id}&populate=product,user`,
        providesTags: ["ProductPurchaseHistory"],
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        providesTags: ["Products"],
      }),
    }),
    getProducts: builder.query({
      query: () => "/products?populate=*",
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product.body,
      }),
      invalidatesTags: ["Products"],
    }),
    //## 特定商品のstockを取得し、-1して保存する。
    //stockが0の商品はエラーを返す
    updateStock: builder.mutation({
      query: (param) => ({
        url: `/products/${param.id}`,
        method: "GET",
      }),
      invalidatesTags: ["Products"],
      transformResponse: async (response) => {
        const stock = parseInt(response.data.attributes.stock);
        console.log("stock=", stock);
        if (stock <= 0) {
          console.log("stock <= 0");
          response.status = "error";
          response.message = "在庫がありません";
          return response;
        }

        console.log("stock=", response.data.attributes.stock);
        const data = {
          data: {
            stock: stock - 1,
          },
        };

        await axios({
          method: "PUT",
          url: `https://lusty.asia:1443/api/products/${response.data.id}`,
          data,
        }).then(({ data }) => {
          console.log("axios=", data);
          return response;
        });
      },
    }),
    updateProduct: builder.mutation({
      query: (product) => ({
        url: `/products/${product.id}`,
        method: "PUT", //PUT: replacing the full record, PATCH: updating the part of record.
        body: product.body,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: ({ id }) => ({
        url: `/Products/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetUserHistoryQuery,
  useGetProductHistoryQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateStockMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsSlice;

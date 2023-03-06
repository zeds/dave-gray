import { productsSlice } from '../products/productsSlice'

export const usersApiSlice = productsSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => '/movies?populate=image',
      keepUnusedDataFor: 5, //default 60s
      providesTags: ['Movies'],
    }),
    // JWTを設定
    //https://github.com/reduxjs/redux-toolkit/issues/2107
    getMe: builder.query({
      query: (token) => ({
        url: '/users/me',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      //keepUnusedDataFor: 5, //default 60s
      providesTags: ['Users'],
      //transformResponse: async (response) => {
      //  console.log("getMe response=", response);
      //},
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: 'PUT',
        body: user.body,
      }),
      invalidatesTags: ['Users'],
      transformResponse: async (response) => {
        console.log('users response=', response)
      },
    }),
  }),
})

export const { useGetMoviesQuery, useUpdateUserMutation, useGetMeQuery } =
  usersApiSlice

export const selectLoginUser = usersApiSlice.endpoints.getMe.select()


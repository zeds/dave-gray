import { productsSlice } from "../products/productsSlice";

export const usersApiSlice = productsSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "/movies?populate=image",
      keepUnusedDataFor: 5, //default 60s
      providesTags: ["Movies"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user.body,
      }),
      invalidatesTags: ["Users"],
      transformResponse: async (response) => {
        console.log("users response=", response);
      },
    }),
  }),
});

export const { useGetMoviesQuery, useUpdateUserMutation } = usersApiSlice;

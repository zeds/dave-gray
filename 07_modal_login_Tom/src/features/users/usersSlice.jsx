import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

export const usersSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://lusty.asia:1443/api" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
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

export const { useUpdateUserMutation } = usersSlice;

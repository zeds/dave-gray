import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../../features/auth/authSlice'

//・access tokenがexpire
//・get new token
const baseQuery = fetchBaseQuery({
	baseUrl: 'https://lusty.asia:1443/api',
	credentials: 'include',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token
		headers.set('Content-type', 'application/json')
		console.log("09_auth fetch");
		if (token) {
			console.log("tokenあり")
			headers.set("Authorization", 'Bearer ${token')
		}
		return headers
	}
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)


	if (result?.error?.originalStatus === 403) {
		console.log('sending refresh token')
		// send refresh token to get new access token
		// [Strapi]
		// REFRESH_SECRET
		// REFRESH_TOKEN_EXPIRES=2d
		// JWT_SECRET_EXPIRES=360s
		const refreshResult = await baseQuery('/refresh', api, extraOptions)
		console.log(refreshResult)
		if (refreshResult?.data) {
			const user = api.getState().auth.user
			// store the new token
			api.dispatch(setCredentials({ ...refreshResult.data, user }))
			// retry the original query with new access token
			result = await baseQuery(args, api, extraOptions)
		} else {
			api.dispatch(logOut())
		}
	}
	return result
}

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: builder => ({})
})
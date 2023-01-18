import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './app/store';
import { Provider } from 'react-redux';

import './index.css'

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './features/api/apiSlice'
import { productsSlice } from './features/products/productsSlice'

ReactDOM.createRoot(document.getElementById('root'))
	.render(
		<>
		<React.StrictMode>
			{/*<ApiProvider api={apiSlice}>*/}
				{/*<ApiProvider api={productsSlice}>*/}
					<Provider store={store}>
						<App />
					</Provider>
				{/*</ApiProvider>*/}
		</React.StrictMode>
		</>
)

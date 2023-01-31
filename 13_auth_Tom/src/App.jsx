import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import './App.css'
import { useLoginMutation } from './features/auth/authApiSlice'
import { useDispatch } from 'react-redux'
import { setCredentials } from './features/auth/authSlice'

function App() {
	const dispatch = useDispatch()

	const credentials = {
		"identifier": "bunyod@gmail.com",
		"password": "yellow"
	}

	const [login, { isLoading }] = useLoginMutation()

	const clickLogin = async () => {
		const userData = await login(credentials).unwrap()
		console.log("userData=", userData)
		dispatch(setCredentials(userData))

		alert("API response=",JSON.stringify(userData))
	}
  return (
		<button onClick={()=>clickLogin()}>ログイン</button>
  )
}

export default App;
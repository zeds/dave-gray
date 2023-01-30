import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'

const Login = () => {
	const userRef = useRef()
	const errRef = useRef()
	const [identifier, setIdentifier] = useState('tom.zed39@gmail.com')
	const [password, setPassword] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()

	const [login, { isLoading }] = useLoginMutation()
   const dispatch = useDispatch()

	useEffect(() => {
		userRef.current.focus()
	},[])

	useEffect(() => {
		setErrMsg('')
	},[identifier, password])

	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log("handleSubmit")

		try {
			const credentials = {
				"identifier": "tom@gmail.com",
				"password": "yellow"
			}
			console.log("credentials=", credentials)
			const userData = await login(credentials).unwrap()
			//const userData = await login({ identifier, password }).unwrap()
			console.log("auth userData=", userData)
			//dispatch(setCredentials({ ...userData, user }))
			dispatch(setCredentials(userData))
			setIdentifier('')
			setPassword('')
			navigate('/welcome')
			console.log("completed login")
		} catch (err) {
			if (!err?.originalStatus) {
				// isLoading: true until timeout occurs
				setErrMsg('No Server Response');
			} else if (err.originalStatus === 400) {
				setErrMsg('Missing Username or Password');
			} else if (err.originalStatus === 401) {
				setErrMsg('Unauthorized');
			} else {
				setErrMsg('Login Failed');
			}
			errRef.current.focus();
		}
	}

	const handleUserInput = (e) => setIdentifier(e.target.value)

	const handlePwdInput = (e) => setPassword(e.target.value)

	const content = isLoading ? <h1>Loading...</h1> : (
		<section className="login">
			 <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>

			 <h1>Employee Login</h1>

			 <form onSubmit={handleSubmit}>
				  <label htmlFor="username">Username: tom@gmail.com</label>
				  <input
						type="text"
						id="username"
						ref={userRef}
						value={identifier}
						onChange={handleUserInput}
						autoComplete="off"
						required
				  />

				  <label htmlFor="password">Password: yellow</label>
				  <input
						type="password"
						id="password"
						onChange={handlePwdInput}
						value={password}
						required
				  />
				  <button>Sign In</button>
			 </form>
		</section>
  )

  return content
}

export default Login
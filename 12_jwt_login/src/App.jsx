import { useDispatch, useSelector } from 'react-redux';
import LoginModal from './components/LoginModal'
import RegisterModal from './components/RegisterModal'

import { openLogin, openRegister } from './features/modal/modalSlice'
import './App.css'

function App() {
	const dispatch = useDispatch();
	const { isLoginOpen, isRegisterOpen } = useSelector((store) => store.modal);

	function clickLogin() {
		dispatch(openLogin())
	}

	function clickRegister() {
		dispatch(openRegister())
	}

  return (
    <div className="App">
			<header>
				<div className="logo">
					Welcome
				</div>
				<div className="user">
					<button onClick={() => clickLogin()}>ログイン</button>
					<button onClick={() => clickRegister()}>新規登録</button>
				</div>
			</header>
			<LoginModal open={isLoginOpen}/>
			<RegisterModal open={isRegisterOpen}/>
    </div>
  )
}

export default App

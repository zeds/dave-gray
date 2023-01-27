import { useDispatch, useSelector } from 'react-redux';
import LoginModal from './components/LoginModal'
import { openLogin } from './features/modal/modalSlice'
import './App.css'

function App() {
	const dispatch = useDispatch();

	const { isLoginOpen } = useSelector((store) => store.modal);

	function clickLogin() {
		dispatch(openLogin())
	}

  return (
		<div className="container">
			<button onClick={() => clickLogin()}>ログイン</button>
			<LoginModal open={isLoginOpen}/>
		</div>
  )
}

export default App

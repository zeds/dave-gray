import { useDispatch, useSelector } from 'react-redux';
import ModalProfile from './components/ModalProfile'
import ModalLogin from './components/ModalLogin';
import { openProfile } from './features/modal/modalSlice'

function App() {
	const dispatch = useDispatch();

	const { isProfileOpen } = useSelector((store) => store.modal);

	function clickProfile() {
		dispatch(openProfile())
	}


  return (
    <div className="container">
			<button onClick={() => clickProfile()}>プロフィール</button>
			<ModalProfile open={isProfileOpen} />
			<button onClick={() => clickProfile()}>ログイン</button>
			<ModalLogin open={isProfileOpen} />
    </div>
  )
}

export default App
import { useDispatch, useSelector } from 'react-redux';
import { openProfile, openOption } from './features/modal/modalSlice'

import ModalOption from './components/Option/ModalOption';
import ModalProfile from './components/Profile/ModalProfile'

function App() {
	const dispatch = useDispatch();

	const { isProfileOpen } = useSelector((store) => store.modal);
	const { isOptionOpen } = useSelector((store) => store.modal);


	//通常の関数
	const clickProfile = () => {
		dispatch(openProfile());
	}
	const clickOption = () => {
		dispatch(openOption());
	}

  return (
    <div className="container">
			<div>
				<button onClick={() => clickProfile()}>プロフィール</button>
				<ModalProfile open={isProfileOpen} />
			</div>
			<div>
				<button onClick={() => clickOption()}>設定</button>
				<ModalOption open={isOptionOpen} />
			</div>

    </div>
  )
}

export default App

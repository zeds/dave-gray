import { useDispatch, useSelector } from 'react-redux';
import ProfileModal from './components/ProfileModal'
import { openProfile } from './features/modal/modalSlice'

function App() {
	const dispatch = useDispatch();

	const { isProfileOpen } = useSelector((store) => store.modal);




  return (
    <div className="container">
			<button onClick={() => clickProfile()}>プロフィール</button>
			<ProfileModal open={isProfileOpen} />
    </div>
  )
}

export default App
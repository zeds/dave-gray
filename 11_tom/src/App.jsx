import { useDispatch, useSelector } from 'react-redux';
import ModalProfile from './components/ModalProfile'
import { openProfile } from './features/modal/modalSlice'

function App() {
	const dispatch = useDispatch();

	const { isProfileOpen } = useSelector((store) => store.modal);


	//通常の関数
	function clickProfile() {
		dispatch(openProfile())

		const person = {
			firstName: "Nick",
			lastName: "Anderson",
			age: 35,
			sex: "M"
		}

		console.log("age=", person['age'])
		console.log("age=", person.age)


	}


  return (
    <div className="container">
			<button onClick={() => clickProfile()}>プロフィール</button>
			<ModalProfile open={isProfileOpen} />
    </div>
  )
}

export default App

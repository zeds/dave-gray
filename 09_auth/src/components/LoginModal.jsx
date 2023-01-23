import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { useLoginMutation } from '../features/products/productsSlice';

const LoginModal = ({
	open
}) => {

	if (!open) return null

	//actionを呼び出す
	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation()


	const clickLogin = (e) => {
		console.log("click login")
		dispatch(closeModal());
	}


	return (
		<aside className='modal_container'>
          <button
            type='button'
            className='modal_confirm_button modal_confirm_button_cancel'
						onClick={async () => {
							const credentials = {
								"identifier": "tom@gmail.com",
								"password": "yellow"
							}
							const userData = await login(credentials)
							console.log("## userData=", userData);

						}}
          >
						ログイン
					</button>
		</aside>
	)
}

export default LoginModal
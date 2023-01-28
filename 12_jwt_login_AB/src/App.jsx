import { useDispatch, useSelector } from 'react-redux';
import LoginModal from './componets/LoginModal';
import RegisterModal from './componets/RegisterModal';
import FacbookModal from './componets/FacbookModal';

import { openLogin } from './feauters/modal/modalSlice';
import { openRegister } from './feauters/modal/modalSlice';
import { openFacbook } from './feauters/modal/modalSlice';

import './App.css'

function App() {
	const dispatch = useDispatch();
	
  const { isLoginOpen, isRegisterOpen,isFacbookOpen } = useSelector((store) => store.modal);
  
  function clickLogin() {
		dispatch(openLogin())
	}

	function clickRegister() {
		dispatch(openRegister())
	}

  function clickFacbook() {
		dispatch(openFacbook())
	}

  return (
      <div className="App">
        <header>
          <div className="logo">
            ようこそ。。。
          </div>
          <div className="user">
            <button onClick={() => clickLogin()}>ログイン</button>
          </div>
          <div className="user2">
            <button onClick={() => clickRegister()}>新規登録</button>
            <button onClick={() => clickFacbook()}>Facebookで新規登録</button>
          </div>
        
        </header>
          <LoginModal open={isLoginOpen}/>
          <RegisterModal open={isRegisterOpen}/>
          <FacbookModal open={isFacbookOpen}/>
        
      </div>
  )
}

export default App

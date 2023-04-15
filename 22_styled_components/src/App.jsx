import { useState } from 'react'
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'

//Pages
import Home from './pages/Home';
import SignUp from './pages/SignupPage';
import Pricing from './pages/PricingPage';
//import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
			<Router>
				<GlobalStyle />
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/pricing" element={<Pricing />} />
				</Routes>
			</Router>
    </div>
  )
}

export default App

import { Navbar } from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Company } from './pages/Company'
import { Contact } from './pages/Contact'
import { Shopping } from './pages/Shopping'
import { Purchase } from './pages/Purchase'
import { Admin } from './pages/Admin'
import { SalesByProduct } from './pages/SalesByProduct'

function App() {
  return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shopping" element={<Shopping />} />
					<Route path="/purchase/:productId" element={<Purchase />} />
					<Route path="/company" element={<Company />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/admin" element={<Admin />} />
					<Route path="/sales_by_product/:productId" element={<SalesByProduct />} />
				</Routes>
			</div>
		</>
  )
}

export default App

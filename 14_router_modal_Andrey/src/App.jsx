import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Company } from './pages/Company'
import { Contact } from './pages/Contact'

function App() {
  return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/company" element={<Company />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</>
  )
}

export default App

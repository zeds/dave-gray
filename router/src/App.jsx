import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Pricing } from './pages/Pricing'
import { About } from './pages/About'

function App() {
  return (
		<>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
		</>
  )
}

export default App

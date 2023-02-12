import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { SortTable } from './components/SortTable'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
			<SortTable/>
    </div>
  )
}

export default App

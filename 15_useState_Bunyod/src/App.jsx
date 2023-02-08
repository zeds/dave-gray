import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(100)
  const [test, setTest] = useState('hoge')

const clickTest = () => {
  setTest('Fugafuga')
},
const clickReset = () => {
  setTest('Fugafuga')
}


  return (
    <div className="App">
      {test}
      <button onClick={ ()=>clickTest()}>Click</button>
      <button onClick={ ()=>clickReset()}>Reset</button>

      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App

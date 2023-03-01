/**eslint
・4:10  error  'React' must be in scope when using JSX  react/react-in-jsx-scope
  解決策：https://bobbyhadz.com/blog/react-must-be-in-scope-when-using-jsx
・React version not specified in eslint-plugin-react settings.
**/
import React from 'react'

import './App.css'

function App() {
  return <div className="App">あいうえお</div>
}

export default App

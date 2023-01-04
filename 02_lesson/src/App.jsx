import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'


function App() {
  const [count, setCount] = useState(0)

  return (

<div class="container">

				<div class="logo">item-1</div>
				<div class="search">item-2</div>
				<div class="nav">item-3</div>

			{/*<AddPostForm />
			<PostsList />*/}
    </div>
  )
}

export default App

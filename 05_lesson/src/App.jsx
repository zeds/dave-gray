import { useState } from 'react'
import './App.css'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm'
import Header from './components/Header'
import SinglePostPage from './features/posts/SinglePostPage'
import EditPostForm from './features/posts/EditPostFrom'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<PostsList />} />
				<Route path="post">
					<Route index element={<AddPostForm />} />
					<Route path=":postId" element={<SinglePostPage />} />
					<Route path="edit/:postId" element={<EditPostForm />} />

				</Route>
			</Route>
		</Routes>
  )
}

export default App

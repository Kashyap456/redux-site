import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heading from './components/Heading'
import PostGrid from './components/PostGrid'
import PostInput from './components/PostInput'

const App = () => {
  const [edit, editView] = useState(false)
  const posts = useSelector(state => state.post)
  const [postList, fetchPosts] = useState([])
  const [addPost, hidePost] = useState(true)

  return (
    <>
      <Heading />
      <div className="flex flex-row justify-end">
        {addPost && (
          <button
            type="button"
            onClick={() => hidePost(false)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
          >
            Add Post
          </button>
        )}
      </div>
      {!addPost && (
        <PostInput
          editView={editView}
          fetchPosts={fetchPosts}
          hidePost={hidePost}
        />
      )}
      <PostGrid posts={postList} />
    </>
  )
}

export default App

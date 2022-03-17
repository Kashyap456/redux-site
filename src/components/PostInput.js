import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postAdd, inputUpdate } from '../actions/PostActions'

const PostInput = ({ editView, fetchPosts, hidePost }) => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.post)
  const [title, setTitle] = useState(post.title)
  const [url, setUrl] = useState(post.url)
  const [desc, setDesc] = useState(post.desc)
  const [id, incId] = useState(0)

  const onCancel = () => {
    dispatch(inputUpdate({ title, url, desc }))
    editView(false)
  }

  const onSubmit = content => {
    dispatch(postAdd(content))
  }

  return (
    <div>
      <form className="flex flex-col items-center">
        <input
          placeholder="Enter title"
          className="mb-2"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          placeholder="Enter image URL"
          className="mb-2"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />
        <input
          placeholder="Enter description"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <div className="flex flex-row">
          <button
            type="submit"
            onClick={e => {
              e.preventDefault()
              onSubmit({
                url,
                desc,
                title,
                id,
              })
              incId(prevState => prevState + 1)
              fetchPosts(post.list)
              onCancel()
            }}
          >
            Post
          </button>
          <button
            type="button"
            onClick={e => {
              e.preventDefault()
              hidePost(true)
              onCancel()
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostInput

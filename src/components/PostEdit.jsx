import { useSelector } from 'react-redux'
import React, { useState } from 'react'

const PostEdit = ({
  idx, onCancel, onSave, onRemove,
}) => {
  const post = useSelector(state => state.post)
  const { list } = post
  const [title, setTitle] = useState(list[idx].title)
  const [url, setUrl] = useState(list[idx].url)
  const [desc, setDesc] = useState(list[idx].desc)

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
              onSave({
                title, url, desc, id: idx,
              })
              onCancel()
            }}
          >
            Post
          </button>
          <button
            type="button"
            onClick={e => {
              e.preventDefault()
              onCancel()
            }}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={e => {
              e.preventDefault()
              onRemove({
                title, url, desc, id: idx,
              })
              onCancel()
            }}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostEdit

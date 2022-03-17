import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const HeadingInput = ({ onCancel, onSave }) => {
  const dispatch = useDispatch()
  const heading = useSelector(state => state.heading)
  const [url, setUrl] = useState(heading.url)
  const [desc, setDesc] = useState(heading.desc)

  return (
    <div>
      <form className="flex flex-col items-center">
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
              onSave({ url, desc })
              onCancel()
            }}
          >
            Save
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
        </div>
      </form>
    </div>
  )
}

export default HeadingInput

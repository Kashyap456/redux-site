import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import PostEdit from './PostEdit'
import { postUpdate, postDelete } from '../actions/PostActions'

const Post = ({
  title, url, desc, id,
}) => {
  const uid = id
  const posts = useSelector(state => state.post)
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)

  const onCancel = () => {
    setEdit(false)
  }

  const onRemove = content => {
    onCancel()
    dispatch(postDelete({ id }))
  }

  const onSave = content => {
    onCancel()
    dispatch(postUpdate(content))
  }

  return (
    <div className="m-2 bg-slate-500 rounded-lg">
      <div>
        {!edit && (
          <div>
            <div>
              <h1 className="font-bold">{`Post #${id}: ${title}`}</h1>
              <img className="max-w-l max-h-l" src={url} alt="INVALID URL" />
              <p>{desc}</p>
            </div>
            <div>
              <button type="button" onClick={() => setEdit(true)}>Edit</button>
            </div>
          </div>
        )}

      </div>
      {edit && <PostEdit idx={id} onCancel={onCancel} onSave={onSave} onRemove={onRemove} />}
    </div>
  )
}

export default Post

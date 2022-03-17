import React, { useState } from 'react'
import HeadingInput from './HeadingInput'
import headingUpdate from '../actions/HeadingActions'

const { useDispatch, useSelector } = require('react-redux')

const Heading = () => {
  const dispatch = useDispatch()
  const heading = useSelector(state => state.heading)
  const [edit, setEdit] = useState(false)

  const onCancel = () => {
    setEdit(false)
  }

  const onSave = content => {
    dispatch(headingUpdate(content))
  }

  return (
    <div className="flex flex-col justify-center bg-gray-400 ">
      <div className="flex flex-col justify-center">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl">Welcome to the Kashyap456 Site</h1>
          {edit || (
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setEdit(prevState => !prevState)}
          >
            Edit
          </button>
          )}
        </div>
        {edit && <HeadingInput onCancel={onCancel} onSave={onSave} />}
      </div>
      <div className="">
        <div>{heading.url && <img className="max-w-xl max-h-xl" src={heading.url} alt="INVALID URL" />}</div>
        <div>{heading.desc && <p>{heading.desc}</p>}</div>
      </div>
    </div>
  )
}

export default Heading

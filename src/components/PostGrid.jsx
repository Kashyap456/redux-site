import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPost } from '../actions/PostActions'
import Post from './Post'

const PostGrid = ({ posts }) => (
  <>
    <h1>POSTGRID</h1>
    <div className="flex flex-row flex-wrap">
      {posts.map(el => <Post title={el.title} url={el.url} desc={el.desc} id={el.id} key={el.id} />)}
    </div>
  </>
)

export default PostGrid

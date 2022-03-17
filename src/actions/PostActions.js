export const postAdd = content => ({
  type: 'postAdd',
  payload: content,
})

export const postUpdate = content => ({
  type: 'postUpdate',
  payload: content,
})

export const postDelete = content => ({
  type: 'postDelete',
  payload: content,
})

export const getPost = content => ({
  type: 'getPost',
  payload: content,
})

export const inputUpdate = content => ({
  type: 'inputUpdate',
  payload: content,
})

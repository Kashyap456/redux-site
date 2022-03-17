const initialState = {
  list: [],
  title: '',
  url: '',
  desc: '',
}

// disabled to fit with redux documentation
// eslint-disable-next-line default-param-last
const postReducer = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case 'postAdd': {
      state.list.push(payload)
      return state
    }
    case 'postUpdate': {
      const { id } = payload
      const { list: up } = state
      let ret = up
      up.forEach((e, idx) => {
        if (e.id === id) {
          ret = up.splice(id, 1, payload)
          // ret = [...up.slice(0, idx), payload, ...up.slice(idx + 1)]
        }
      })
      return { list: ret, ...state }
    }
    case 'postDelete': {
      const { id } = payload
      const { list: up } = state
      let ret = up
      up.forEach((e, idx) => {
        if (e.id === id) {
          ret = up.splice(id, 1)
        }
      })
      return { list: ret, ...state }
    }
    case 'inputUpdate':
      return {
        ...state,
        title: payload.title,
        url: payload.url,
        desc: payload.desc,
      }
    default: {
      return state
    }
  }
}

export default postReducer

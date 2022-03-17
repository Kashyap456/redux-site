import headingUpdate from '../actions/HeadingActions'

const initialState = {
  url: '',
  desc: '',
}

// Redux docs followed this format, so I'm ignoring the eslint rule in this case
// eslint-disable-next-line default-param-last
const headingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'headingUpdate':
      return { ...state, url: action.payload.url, desc: action.payload.desc }
    default:
      return state
  }
}

export default headingReducer

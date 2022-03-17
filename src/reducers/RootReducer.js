import headingReducer from './HeadingReducer'
import postReducer from './PostReducer'

const { combineReducers } = require('redux')

const rootReducer = combineReducers({
  heading: headingReducer,
  post: postReducer,
})

export default rootReducer

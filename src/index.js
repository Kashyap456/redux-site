import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import App from './App'
import rootReducer from './reducers/RootReducer'

const store = createStore(rootReducer)

const app = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  app
)

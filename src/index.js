import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import TodoList from './TodoList'
import store from './store'
import './index.css'

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(
  App,
  document.getElementById('root')
);

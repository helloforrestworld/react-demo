import ReactDOM from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import TodoApp from './TodoApp'
import store from './redux/store'
import './index.css'
import 'antd/dist/antd.css'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

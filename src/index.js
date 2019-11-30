import ReactDOM from 'react-dom'
import React, { Fragment } from 'react'
import TodoList from './TodoList'
import Game from './Game'
import './index.css'

ReactDOM.render(
  <Fragment>
    <Game />
    <TodoList />
  </Fragment>,
  document.getElementById('root')
);

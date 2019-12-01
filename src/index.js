import ReactDOM from 'react-dom'
import React, { Fragment } from 'react'
import TodoList from './TodoList'
import Game from './Game'
import Animate from './Animate'
import AntdTodo from './AntdTodo'
import './index.css'

ReactDOM.render(
  <Fragment>
    <Game />
    <TodoList />
    <Animate />
    <AntdTodo />
  </Fragment>,
  document.getElementById('root')
);

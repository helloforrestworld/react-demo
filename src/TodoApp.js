import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

export default class TodoApp extends Component {
  render() {
    return (
      <div className='todo-app'>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList/>
      </div>
    )
  }
}

import React, { Component } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filter from './components/Filter'

export default class TodoApp extends Component {
  render() {
    return (
      <div className='todo-app'>
        <h1>Todo List</h1>
        <AddTodo />
        <TodoList/>
        <Filter />
      </div>
    )
  }
}

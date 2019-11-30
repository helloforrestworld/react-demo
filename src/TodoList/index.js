import React, { Component } from 'react'
import './index.css'

export default class TodoList extends Component {
  render() {
    return (
      <div className='todo-list'>
        TodoList
        <div>
          <input type="text"/>
          <button>提交</button>
        </div>
        <ul>
          <li>学写代码</li>
          <li>学的其他</li>
        </ul>
      </div>
    )
  }
}

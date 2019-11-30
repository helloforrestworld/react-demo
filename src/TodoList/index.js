import React, { Component } from 'react'
import TodoItem from './TodoItem'
import './index.css'

// dangerouslySetInnerHTML
// htmlFor
// className
// setState接受一个函数或者对象

export default class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习React', '学习Vue']
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  getTodoItem() {
    return this.state.list.map((item, idx) => {
      return (
        <TodoItem
          key={idx}
          content={item}
          onClick={this.handleDeleteItem.bind(this, idx)}
        />
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleBtnClick() {
    this.setState((preState) => {
      let { inputValue, list } = preState
      if (!inputValue.trim()) {
        alert('请输入内容')
        return
      }
      return {
        list: [...list, inputValue],
        inputValue: ''
      }
    })
  }

  handleKeyUp(e) {
    if (e.keyCode === 13) {
      this.handleBtnClick()
    }
  }

  handleDeleteItem(idx) {
    this.setState((preState) => {
      let list = [...preState.list]
      list.splice(idx, 1)
      return {
        list
      }
    })
  }

  render() {
    return (
      <div className='todo-list'>
        <div>
          <label htmlFor='input'>输入内容</label>
          <input id='input' value={this.state.inputValue} type='text' onChange={this.handleInputChange} onKeyUp={this.handleKeyUp}/>
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </div>
    )
  }
}

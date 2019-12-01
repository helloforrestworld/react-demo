import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from '../store'
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from '../store/actionTypes'
import 'antd/dist/antd.css'

export default class AntdTodo extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT_VALUE,
      value: e.target.value
    }
    store.dispatch(action)
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

  handleBtnClick() {
    const action = {
      type: ADD_TODO_ITEM
    }
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = {
      type: DELETE_TODO_ITEM,
      index
    }
    store.dispatch(action)
  }

  render() {
    return (
      <div style={{marginTop: 20}}>
        <div style={{marginBottom: 20}}>
          <Input
            value={this.state.inputValue}
            placeholder='Todo info'
            style={{width: 300, marginRight: 10}}
            onChange={this.handleInputChange}
          />
          <Button
            type='primary'
            onClick={this.handleBtnClick}
          >添加</Button>
        </div>
        <div>
          <List
            style={{width: 300}}
            bordered
            dataSource={this.state.list}
            renderItem={(item, index) => <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>}
          />
        </div>
      </div>
    )
  }
}

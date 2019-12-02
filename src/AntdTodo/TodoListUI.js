import React from 'react'
import { Input, Button, List } from 'antd'

 const TodoListUI = (props) => {
  return (
    <div style={{marginTop: 20}}>
      <div style={{marginBottom: 20}}>
        <Input
          value={props.inputValue}
          placeholder='Todo info'
          style={{width: 300, marginRight: 10}}
          onChange={props.handleInputChange}
        />
        <Button
          type='primary'
          onClick={props.handleBtnClick}
        >添加</Button>
      </div>
      <div>
        <List
          style={{width: 300}}
          bordered
          dataSource={props.list}
          renderItem={(item, index) => <List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>}
        />
      </div>
    </div>
  )
}

export default TodoListUI

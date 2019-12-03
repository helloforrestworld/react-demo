import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'
import { addTodo } from '../redux/actions'

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  updateInput = (input) => {
    this.setState({ input })
  }

  handleAddTodo = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <Input
          style={{width: 300}}
          value={this.state.input}
          onChange={e => this.updateInput(e.target.value)}
        />
        <Button
          className="add-todo"
          type='primary'
          onClick={this.handleAddTodo}
        >添加</Button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
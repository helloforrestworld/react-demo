import React, { Component } from 'react'

export default class TodoItem extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.content}
      </div>
    )
  }
}

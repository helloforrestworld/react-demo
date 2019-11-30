import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        {this.props.test} - {this.props.content}
      </div>
    )
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

TodoItem.defaultProps = {
  test: 'hello world'
}
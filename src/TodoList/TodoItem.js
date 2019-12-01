import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  // 组件从父组件接受参数
  // 只要父组件render函数被重新执行了， 子组件的这个生命周期才会执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }

  componentWillMount() {
    console.log('child componentWillMount')
  }

  componentDidMount() {
    console.log('child componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('child shouldComponentUpdate')
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }

  componentWillUpdate() {
    console.log('child componentWillUpdate')
  }

  componentDidUpdate() {
    console.log('child componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('child componentWillUnmount')
  }

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
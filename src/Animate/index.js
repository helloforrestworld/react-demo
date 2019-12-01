import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.css'

export default class Animate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.add = this.add.bind(this)
  }

  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='my-node'
                  unmountOnExit
                  onEntered={(el) => {el.style.color = 'blue'}}
                  appear={true}
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        <button onClick={this.add}>add</button>
      </Fragment>
    )
  }

  add() {
    this.setState((preState) => ({
      list: [...preState.list, 'item']
    }))
  }
}

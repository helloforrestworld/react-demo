import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { GlobalStyle } from './style.js'
import { IconFont } from './static/iconfont/iconfont'
import Header from './common/header/'
import store from './store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <IconFont />
        <GlobalStyle />
        <Header />
      </Provider>
    )
  }
}

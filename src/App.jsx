import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store'

import Header from './common/header/'
import Home from './pages/home/'
import Detail from './pages/detail/'

import { GlobalStyle } from './style.js'
import { IconFont } from './static/iconfont/iconfont'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <IconFont />
          <GlobalStyle />
          <Header />
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
        </Fragment>
      </Provider>
    )
  }
}

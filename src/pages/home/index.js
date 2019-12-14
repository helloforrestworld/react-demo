import React, { Component } from 'react'
import { connect } from 'react-redux'

import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

import { actionCreators } from './store'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner-img"/>
          <Topic />
          <List />
        </HomeLeft>

        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>

        { this.props.showScroll ? <BackTop onClick={this.scrollToTop}>顶部</BackTop> : '' }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvent()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', () => { this.handleWindowScroll() })
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  bindEvent() {
    window.addEventListener('scroll', () => { this.handleWindowScroll() })
  }

  handleWindowScroll() {
    if (document.documentElement.scrollTop > 200) {
      this.props.toggleScrollShow(true)
    } else {
      this.props.toggleScrollShow(false)
    }
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeData()
      dispatch(action)
    },
    toggleScrollShow(show) {
      const action = actionCreators.toggleScrollShow(show)
      dispatch(action)
    }
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

export default connect(mapState, mapDispatch)(Home)
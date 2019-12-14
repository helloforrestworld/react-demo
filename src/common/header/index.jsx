import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch,
  Addition,
  Button
} from './style'
class Header extends Component {
  constructor(props) {
    super(props)
    this.getSearchList = this.getSearchList.bind(this)
  }

  getSearchList() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseIn,
      handleMouseLeave,
      setPage
    } = this.props

    const start = (page - 1) * 10
    const end = page * 10
    const newList = list.slice(start, end)

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseIn} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { setPage(page, totalPage, this.spin) }}>
              <i ref={(spin) => { this.spin = spin }} className="iconfont spin">&#xe858;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              newList.map(item => {
                return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              })
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      focused,
      list,
      handleInputFocus,
      handleInputBlur
    } = this.props
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <Link to='/' className='left active'>
            <NavItem className='left active'>首页</NavItem>
          </Link>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavSearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames='slide'
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => { handleInputFocus(list) }}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe62f;</i>
            {this.getSearchList()}
          </NavSearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'>
            <i className='iconfont'>&#xe624;</i>
            写文章
            </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    list: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getHeaderList())
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMouseIn() {
      dispatch(actionCreators.mouseIn())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    setPage(page, totalPage, spinDom) {
      let deg = 0
      if (spinDom.style.transform) {
        deg = Number(spinDom.style.transform.replace(/[^0-9]/g, ''))
      }
      spinDom.style.transform = `rotate(${deg + 360}deg)`

      if (page < totalPage) {
        page++
      } else {
        page = 1
      }
      dispatch(actionCreators.setPage(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
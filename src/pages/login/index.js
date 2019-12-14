import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'

import { actionCreators } from './store'

class Login extends PureComponent {
  render() {
    const { loginState } = this.props
    if (!loginState) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input className='acct' type='text' placeholder='输入账户名' ref={(account) =>this.account = account}/>
            <Input type='password' placeholder='输入密码' ref={(password) => this.password = password}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to='/' />
    }
  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'loginState'])
})

const mapDispatch = (dispatch) => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreators.login(accountEle.value, passwordEle.value))
  }
})

export default connect(mapState, mapDispatch)(Login)
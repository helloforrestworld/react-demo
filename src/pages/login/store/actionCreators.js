import axios from 'axios'
import { constants } from './index'

export const login = (acct, password) => {
  return (dispatch) => {
    axios.get(`/api/login.json?acct=${acct}&password=${password}`)
      .then(res => {
        console.log(res)
        if (res.data.data) {
          dispatch(changeLogin(true))
        } else {
          alert('登录失败')
        }
      })
  }
}

export const changeLogin = (loginState) => ({
  type: constants.CHANGE_LOGIN,
  loginState
})
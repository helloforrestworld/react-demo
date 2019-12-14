import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  loginState: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('loginState', action.loginState)
    default:
      return state
  }
}
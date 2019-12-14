import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge(action.data)
    default:
      return state
  }
}
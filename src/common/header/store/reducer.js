import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  focused: false,
  list: []
})

export default ( state = defaultState, action ) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true)
    case constants.SEARCH_BLUR:
      return state.set('focused', false)
    case constants.CHANGE_LIST:
      return state.set('list', fromJS(action.data))
    default:
      return state
  }
}
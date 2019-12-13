import { constants } from './index'

const defaultState = {
  focused: false
}

export default ( state = defaultState, action ) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      ...state,
      focused: true
    }
  }

  if (action.type === constants.SEARCH_BLUR) {
    return {
      ...state,
      focused: false
    }
  }
  return state
}
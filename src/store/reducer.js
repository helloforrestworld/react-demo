const defaultState = {
  focused: false
}

export default ( state = defaultState, action ) => {
  if (action.type === 'search_focus') {
    return {
      ...state,
      focused: true
    }
  }

  if (action.type === 'search_blur') {
    return {
      ...state,
      focused: false
    }
  }
  return state
}
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODO_LIST } from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  let { type } = action
  let newState = JSON.parse(JSON.stringify(state))

  if (type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
    return newState
  }

  if (type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1)
    return newState
  }

  if (type === INIT_TODO_LIST) {
    newState.list = action.list
    return newState
  }

  return state
}
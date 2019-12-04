import { SET_FILTER } from '../actionTypes'
import { FILTERS } from '../../const'

const initialState = FILTERS.All

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}
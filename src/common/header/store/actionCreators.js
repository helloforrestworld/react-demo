import axios from 'axios'
import { constants } from './index'

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const getHeaderList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {
      if (res.data.success) {
        dispatch(changeList(res.data.data))
      }
    }).catch(err => {
      console.log(err)
    })
  }
}

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data
})
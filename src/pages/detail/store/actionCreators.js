import axios from 'axios'
import { constants } from './index'

export const getDetail = () => {
  return (dispatch) => {
    axios.get('/api/detail.json').then(res => {
      console.log('res: ', res)
      if (res.data.success) {
        dispatch(changeDetail(res.data.data))
      }
    })
  }
}

const changeDetail = (data) => ({
  type: constants.CHANGE_DETAIL,
  data
})
import axios from 'axios'
import { constants } from './index'

export const getHomeData = () => {
  return (dispatch) => {
    axios.get('api/home.json').then(res => {
      if (res.data.success) {
        dispatch(changeHomeData(res.data.data))
      }
    })
  }
}

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  ...data
})
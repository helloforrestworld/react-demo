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

export const getMoreArticle = (page) => {
  return (dispatch) => {
    axios.get('api/articleList.json?page=' + page).then(res => {
      if (res.data.success) {
        const articleList = res.data.data
        const nextPage = page + 1
        dispatch(addArticleList(articleList, nextPage))
      }
    })
  }
}

const changeHomeData = (data) => ({
  type: constants.CHANGE_HOME_DATA,
  ...data
})

const addArticleList = (articleList, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  articleList,
  nextPage
})
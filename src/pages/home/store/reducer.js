import { fromJS } from 'immutable'
import { constants } from './index'

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  page: 1,
  showScroll: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
      })
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.articleList)),
        page: action.nextPage
      })
    case constants.TOGGLE_SCROLL_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}
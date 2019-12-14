import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: '运动摄影',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/4287007/b7b9c810-069e-4385-aec7-1823e94ee43d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }, {
    id: 2,
    title: '奇葩说',
    imgUrl: 'https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
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
  }],
  articleList: [{
    id: 1,
    title: '妻子旅行2：低学历的包文婧炫出高情商婚姻相处之道',
    desc: '本文转载自简书App作者：沐言Aimee 很多人认识包文婧，是因为她是包贝尔的老婆，曾经参加过湖南台的《妈妈是超人第二季》。 而我对于她最初的一...',
    imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }, {
    id: 2,
    title: '妻子旅行2：低学历的包文婧炫出高情商婚姻相处之道',
    desc: '本文转载自简书App作者：沐言Aimee 很多人认识包文婧，是因为她是包贝尔的老婆，曾经参加过湖南台的《妈妈是超人第二季》。 而我对于她最初的一...',
    imgUrl: 'https://upload.jianshu.io/admin_banners/web_images/4824/066b16f3ca11cfb4f2a47b0ecc53010e0e5e5e95.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
  }]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
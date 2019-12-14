import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
  .banner-img {
    width: 100%;
    height: 270px;
    border-radius: 4px;
  }
`

export const HomeLeft = styled.div`
  float: left;
  width: 625px;
  padding-top: 30px;
`

export const HomeRight = styled.div`
  float: left;
  width: 280px;
  padding-top: 30px;
  margin-left: 40px;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #dcdcdc;
`

// Topic组件
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #000;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .topic-pic {
    display: block;
    float: left;
    width:32px;
    height: 32px;
    margin-right: 10px;
  }
`

// List组件
export const ListItem = styled.div`
  overflow: hidden;
  margin: 0 0 15px;
  padding: 15px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  .pic {
    float: right;
    width: 148px;
    height: 98px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
`

export const ListInfo = styled.div`
  float: left;
  width: 458px;
  .title {
    font-size: 18px;
    line-height: 1.5;
    font-weight: bold;
    cursor: pointer;
  }
  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  margin: 20px 0;
  line-height: 40px;
  background: #a5a5a5;
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`

// Recommend组件
export const RecommendWrapper = styled.div`
`

export const RecommendItem = styled.div`
  min-height: 50px;
  margin-bottom: 4px;
  border-radius: 6px;
  width: 100%;
  background: url(${(props) => props.imgUrl}) no-repeat;
  background-size: contain;
  cursor: pointer;
`


// Writer组件
export const WriterWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 40px;
  border: 1px solid #ececec;
`
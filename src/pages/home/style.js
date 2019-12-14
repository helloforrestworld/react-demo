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

// 子组件
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
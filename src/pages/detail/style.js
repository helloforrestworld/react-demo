import styled from 'styled-components'

export const DetailWrapper = styled.div`
  width: 640px;
  margin: 0 auto;
  padding-bottom: 30px;
  overflow: hidden;
`

export const Header = styled.div`
  margin: 30px 0 20px 0;
  line-height: 44px;
  font-size: 34px;
  color: #333;
  font-weight: bold;
`

export const Content = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #2f2f2f;
  .cover {
    width: 100%;
    margin-bottom: 30px;
    border-radius: 6px;
  }
  p {
    margin-bottom: 10px;
  }
  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;
  }
`
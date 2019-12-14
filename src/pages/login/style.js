import styled from 'styled-components'

export const LoginWrapper = styled.div`
  z-index: 0;
  position: absolute;
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ececec;
`

export const LoginBox = styled.div`
  width: 280px;
  height: 180px;
  margin: 60px auto;
  padding: 50px 50px 30px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`

export const Input = styled.input`
  width: 251px;
  height: 33px;
  margin: 0 auto;
  line-height: 33px;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  border-radius: 4px;
  &.acct {
    border-bottom: none;
    border-radius: 4px 4px 0 0;
  }
`

export const Button = styled.div`
  width: 300px;
  height: 40px;
  margin: 30px auto;
  line-height: 40px;
  background: #3194d0;
  border-radius: 25px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  &:hover {
    background: #187cb7;
  }
`
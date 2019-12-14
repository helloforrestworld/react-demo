import styled from 'styled-components'
import logo from '../../static/logo.png'

export const HeaderWrapper = styled.nav`
  position: relative;
  height: 56px;
  border: 1px solid #f0f0f0;
`

export const Logo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 56px;
  width: 100px;
  background: url(${logo}) no-repeat;
  background-size: contain;
`

export const Nav = styled.div`
  box-sizing: border-box;
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 30px;
`

export const NavItem = styled.div`
  padding: 0 15px;
  line-height: 56px;
  color: #333;
  font-size: 17px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  box-sizing: border-box;
  left: 20px;
  top: 56px;
  width: 280px;
  min-height: 40px;
  padding: 0 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`

export const SearchInfoTitle = styled.div`
  overflow: hidden;
  margin-top: 14px;
  margin-bottom: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 14px;
  cursor: pointer;
  .spin {
    display: inline-block;
    font-size: 12px;
    margin-right: 4px;
    transition: all .4s ease-in;
    transform-origin: center center;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const SearchInfoItem= styled.a`
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid #b4b4b4;
  line-height: 20px;
  font-size: 13px;
  color: #999;
  cursor: pointer;
  &:hover {
    border-color: #999;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  box-sizing: border-box;
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-left: 20px;
  margin-top: 9px;
  font-size: 14px;
  color: #777;
  border-radius: 19px;
  border: 1px solid #eee;
  outline: none;
  background: #eee;
  &::placeholder {
    color: #909090;
  }
  &.focused {
    width: 240px;
  }
  &.slide-enter, &.slide-exit {
    transition: all 200ms ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit-active {
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  box-sizing: border-box;
  float: right;
  height: 38px;
  line-height: 38px;
  padding: 0 20px;
  margin-right: 20px;
  margin-top: 9px;
  border-radius: 19px;
  font-size: 14px;
  cursor: pointer;
  &.reg {
    color: #ea6f5a;
    &:hover {
      background: rgba(236,97,73,.05);
    }
  }
  &.writing {
    color: #fff;
    background: #ea6f5a;
    &:hover {
      background: #ec6149;
    }
  }
`
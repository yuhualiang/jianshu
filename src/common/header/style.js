import styled from 'styled-components';
import logPic from '../../statics/logo-jianshu.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logPic});
  background-size: contain;
`;

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
`;

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
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
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .loupe {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      background: #333232;
      color: #fff;
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 9px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  font-size: 14px;
  color: #666;
  background: #eee;
  &::placeholder {
    color: #999;
  };
  &.focused {
    width: 240px;
  };
  &.slide-enter {
    transition: all .2s ease-in;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all .2s ease-in;
  }
  &.slide-exit-active {
    width: 160px;
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  box-sizing: border-box;
  font-size: 14px;
  &.reg {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
    .plume {
      font-size: 12px;
      margin-right: 6px;
    }
  }
`;

export const SearchInfo = styled.div`
  position : absolute;
  width : 250px;
  left : 20px;
  box-sizing : border-box;
  top : 58px;
  background : #fff;
  border-radius : 3px;
  padding: 20px;
  box-shadow : 0 0 8px rgba(0, 0, 0, .2);
  :before{
    content : "";
    position : absolute;
    left : 20px;
    bottom : 99%;
    width : 0;
    height : 0;
    border : 14px solid transparent;
    border-bottom-color: #fff;
    box-sizing : border-box;
  }
`;

export const SearchList = styled.div`
  list-style: none;
  color: rgb(120, 120, 120);
  overflow: hidden;
`;
export const SearchListItem = styled.li`
  margin-right : 10px;
  float : left;
  display: inline-block;
  .item-content{	  
    font-size : 12px;
    display : block;
    margin : 7px 0px;
    padding: 2px 6px;
    color : #787878;
    box-sizing : border-box;
    border : 1px solid #ddd;
    border-radius : 3px;
    cursor : pointer;
    text-decoration : none;
    :hover{
      border-color : #666;
    }
  }
`;

export const SearchTitle = styled.div`
  color : rgb(150, 150, 150);
  font-size: 14px;
  margin-bottom : 10px;
`;

export const SearchSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor : pointer;
	.spin{
    display : block;
    margin-right : 3px;
    float : left;
    font-weight : 500;
    font-size : 14px;
      transition : all .2s ease-in;
      transform-origin: center center;
	}
`
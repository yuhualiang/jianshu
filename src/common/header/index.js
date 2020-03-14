import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {actions} from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登陆</NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe636;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition in={props.focused} timeout={200} classNames="slide">
            <NavSearch className={props.focused ? 'focused' : ''}
              onFocus={props.switchFocused}
              onBlur={props.switchFocused}>
            </NavSearch>
          </CSSTransition>
          <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe687;</i>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writting'>
          <i className="iconfont plume">&#xe6e5;</i>写文章
          </Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchFocused() {
      dispatch(actions.switchFocusedAction());
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
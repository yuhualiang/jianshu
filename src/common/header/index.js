import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actions } from './store';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button,
  SearchInfo
} from './style';

class Header extends React.Component {
  searchArea() {
    const props = this.props;
    const focused = props.focused;
    const mouseEnter = props.mouseEnter;
    if (focused || mouseEnter) {
      return (
        <SearchInfo 
          onMouseEnter={() => {props.handleSearchInfoMouseAc(true)}}
          onMouseLeave={() => {props.handleSearchInfoMouseAc(false)}}
        >
          SearchInfo
        </SearchInfo>
      )
    }
    return null
  }

  render() {
    const props = this.props;
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
                onFocus={() => {props.switchFocused(true)}}
                onBlur={() => {props.switchFocused(false)}}>
              </NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe687;</i>
            {this.searchArea()}
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    switchFocused(flag) {
      if (flag) {
        dispatch(actions.getSearchInfoDataAction())
        console.log(actions.getSearchInfoDataAction())
      }
      dispatch(actions.switchFocusedAction());
    },
    handleSearchInfoMouseAc(flag) {
      dispatch(actions.changeMouseEnterSearchInfoStatusAction(flag))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseEnter: state.getIn(['header', 'mouseEnterSearchInfoStatus'])
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
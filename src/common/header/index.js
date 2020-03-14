import React from 'react';
import {CSSTransition} from 'react-transition-group';
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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.switchFocused = this.switchFocused.bind(this);
    this.state = {
      focused: false
    }
  }
  render() {
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
            <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
              <NavSearch className={this.state.focused ? 'focused' : ''}
                        onFocus={this.switchFocused}
                        onBlur={this.switchFocused}>
              </NavSearch>
            </CSSTransition>
            <i className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe687;</i>
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

  switchFocused() {
    this.setState((state) => ({
      focused: !state.focused
    }))
  }
}

export default Header;
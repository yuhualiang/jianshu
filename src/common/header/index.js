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
  SearchInfo,
  SearchList,
  SearchListItem,
  SearchTitle,
  SearchSwitch
} from './style';

const SHOW_NUM = 10;

class Header extends React.Component {
  searchArea() {
    const props = this.props;
    const focused = props.focused;
    const mouseEnter = props.mouseEnter;
    if (focused || mouseEnter) {
      return (
        <SearchInfo
          onMouseEnter={() => { props.handleSearchInfoMouseAc(true) }}
          onMouseLeave={() => { props.handleSearchInfoMouseAc(false) }}
        >
          <SearchTitle>
            热门搜索:
            <SearchSwitch onClick={() => { props.handleChangePage(props.currentPage, props.totalPage, this.spinIcon) }}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe68f;</i>
              换一批
            </SearchSwitch>
          </SearchTitle>
          <SearchList>
            {
              props.searchInfoData.slice(
                (props.currentPage - 1) * SHOW_NUM,
                props.currentPage * SHOW_NUM
              ).map((item, index) => {
                return <SearchListItem key={index}><a href='./' className='item-content'>{item}</a></SearchListItem>
              })
            }
          </SearchList>
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
                onFocus={() => { props.switchFocused(true, props.searchInfoData) }}
                onBlur={() => { props.switchFocused(false) }}>
              </NavSearch>
            </CSSTransition>
            <i className={props.focused ? 'iconfont loupe  focused' : 'iconfont loupe'}>&#xe687;</i>
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
    switchFocused(flag, searchInfoData) {
      if (flag) {
        if (searchInfoData.length <= 0) {
          dispatch(actions.getSearchInfoDataAction())
        }
      }
      dispatch(actions.switchFocusedAction())
    },
    handleSearchInfoMouseAc(flag) {
      dispatch(actions.changeMouseEnterSearchInfoStatusAction(flag))
    },
    handleChangePage(currentPage, totalPage, spinIcon) {
      let originAngle = spinIcon.style.transform.replace(/[^0-9]/g, '')
      originAngle = originAngle ? parseInt(originAngle, 10) : 0;
      spinIcon.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      const nextPage = currentPage < totalPage ? currentPage + 1 : 1;
      dispatch(actions.changeCurrentPageAction(nextPage))
    }
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    mouseEnter: state.getIn(['header', 'mouseEnterSearchInfoStatus']),
    searchInfoData: state.getIn(['header', 'searchInfoData']).toJS(),
    currentPage: state.getIn(['header', 'currentPage']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
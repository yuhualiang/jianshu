import React from 'react';
import HomeBanner from './components/HomeBanner';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { getHomeDataAction } from './store/actions';
import { actionTypes } from './store';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style';

class Home extends React.PureComponent {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <HomeBanner />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {this.props.scrollTopShow && <BackTop onClick={this.scrollToTop}>顶部</BackTop>}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
    this.bindEvents();
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => ({
  scrollTopShow: state.getIn(['home', 'scrollTopShow'])
});

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(getHomeDataAction())
  },
  changeScrollTopShow() {
    const action = {
      type: actionTypes.TOGGLE_SCROLL_TOP_SHOW,
      value: true
    };
    if (document.documentElement.scrollTop > 300) {
      dispatch(action);
    } else {
      action.value = false;
      dispatch(action)
    }
  }
})

export default connect(mapState, mapDispatch)(Home);
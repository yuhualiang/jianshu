import React from 'react';
import HomeBanner from './components/HomeBanner';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { getHomeDataAction } from './store/actions'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
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
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.getHomeData();
  }
}

const mapState = (state) => ({
  
});

const mapDispatch = (dispatch) => ({
  getHomeData() {
    dispatch(getHomeDataAction())
  }
})

export default connect(mapState, mapDispatch)(Home);
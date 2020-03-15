import React from 'react';
import HomeBanner from './components/HomeBanner';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
} from './style';

class Home extends React.Component {

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
}

export default Home;
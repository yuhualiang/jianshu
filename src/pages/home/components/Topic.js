import React from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends React.PureComponent {
  render() {
    return (
      <TopicWrapper>
        {
          this.props.topicList.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img className="topic-pic" src={item.get('imgUrl')} alt="" />
              {item.get('title')}
            </TopicItem>)
          })
        }
      </TopicWrapper>
    )
  }
}

const mapState = (state) => ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapState, null)(Topic);
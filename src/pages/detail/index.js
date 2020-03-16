import React from 'react';
import { connect } from 'react-redux';
import { actions } from './store'
import {
  DetailWrapper, Header, Content
} from './style';

class Detail extends React.Component {

  render() {
    console.log(this.props.match.params.id)
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetailData(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
  getDetailData(id) {
    dispatch(actions.getDetailDataAction(id))
  }
})

export default connect(mapState, mapDispatch)(Detail);
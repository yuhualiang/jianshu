import React from 'react';
import { connect } from 'react-redux';
import { ListItem, ListInfo, LoadMore } from '../style'
import { loadMoreArticaleAction } from '../store/actions';
import { Link } from 'react-router-dom';

class List extends React.PureComponent {
  render() {
    return (
      <div>
        {
          this.props.list.map((item, index) => {
            return (
              <Link to="/detail" key={index}>
                <ListItem>
                  <img className='pic' src={item.get('imgUrl')} alt="" />
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => {this.props.loadMoreArticale(this.props.articlePage)}}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  articlePage: state.getIn(['home', 'articlePage'])
});

const mapDsipatch = (dispatch) => ({
  loadMoreArticale(currentPage) {
    dispatch(loadMoreArticaleAction(currentPage + 1))
  }
})

export default connect(mapState, mapDsipatch)(List);
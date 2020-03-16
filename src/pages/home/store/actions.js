import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable'

export const getHomeDataAction = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      res = res.data;
      if (res.success) {
        const action = {
          type: actionTypes.GET_HOME_DATA,
          value: {
            topicList: res.topicList,
            articleList: res.articleList,
            recommendList: res.recommendList
          } 
        };
        dispatch(action)
      }
    }).catch((err) => {
      console.log(err);
    })
  }
};

export const loadMoreArticaleAction = (nextPage) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + nextPage).then((res) => {
      res = res.data;
      if (res.success) {
        const action = {
          type: actionTypes.LOAD_MORE_ARTICAL,
          value: {
            articleList: fromJS(res.articleList),
            nextPage
          }
        };
        dispatch(action);
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}
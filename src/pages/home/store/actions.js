import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getHomeDataAction = () => {
  return (dispatch) => {
    axios.get('/api/homeData.json').then((res) => {
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
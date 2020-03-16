import axios from 'axios';
import * as actionTypes from './actionTypes';

function getDetailData(dispatch, id) {
  axios.get('/api/detail.json?id=' + id).then((res) => {
    res = res.data;
    if (res.success) {
      const action = {
        type: actionTypes.GET_DETAIL_DATA,
        value: {
          title: res.data.title,
          content: res.data.content
        }
      };
      dispatch(action);
    }
  }).catch((err) => {
    console.log(err)
  })
}

export const getDetailDataAction = (id) => {
  return (dispatch) => {
    getDetailData(dispatch, id)
  }
}
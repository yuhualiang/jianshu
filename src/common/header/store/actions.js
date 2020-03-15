import axios from 'axios';
import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const SHOW_NUM = 10;

export const switchFocusedAction = () => ({
  type: actionTypes.SWITCH_FOCUSE
})

export const changeMouseEnterSearchInfoStatusAction = (flag) => ({
  type: actionTypes.CHANGE_MOUSE_ENTER_SEARCH_INFO_STATUS,
  value: flag
})

export const getSearchInfoDataAction = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res) => {
      res = res.data;
      if (res.success) {
        const action = {
          type: actionTypes.GET_SEARCH_INFO_DATA,
          value: fromJS(res.data),
          totalPage: Math.ceil(res.data.length / SHOW_NUM)
        };
        dispatch(action);
      }
    })
  }
}

export const changeCurrentPageAction = (page) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  value: page
})

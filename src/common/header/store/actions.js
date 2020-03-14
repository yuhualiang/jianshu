import axios from 'axios';
import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

export const switchFocusedAction = () => ({
  type: actionTypes.SWITCH_FOCUSE
})

export const changeMouseEnterSearchInfoStatusAction = (flag) => ({
  type: actionTypes.CHANGE_MOUSE_ENTER_SEARCH_INFO_STATUS,
  value: flag
})

/**
 * 获取推荐搜索列表
 */
export const getSearchInfoDataAction = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res) => {
      res = res.data;
      if (res.success) {
        const action = {
          type: actionTypes.GET_SEARCH_INFO_DATA,
          value: fromJS(res.data)
          // value: res.data
        };
        dispatch(action);
      }
    })
  }
}

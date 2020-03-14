import axios from 'axios';
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
export const getSearchInfoDataAction = () => ({
  type: actionTypes.GET_SEARCH_INFO_DATA,
  value: getSearchInfoData()
})

// const getSearchInfoData = () => {
//   axios.get('./api/headerList.json').then((res) => {
//     res = res.data;
//     if (res.success) {
//       return res.data;
//     }
//   }).catch((err) => {
//     console.log(err)
//   })
// }
// function* getSearchInfoData() {
//   yield axios.get('./api/headerList.json')
// }

// function* countAppleSales () {
//   var saleList = [3, 7, 5];
//   for (var i = 0; i < saleList.length; i++) {
//     yield saleList[i];
//   }
// }

// export const getSearchList = (data) => ({
//   type : constants.SEARCH_GET_LIST,
//   data : fromJS(data),
//   totalPage : Math.ceil(data.length/10)
// })
/**
 * 获取推荐搜索列表
 */
// export const getList = () => {
//   return (dispatch) => {
//       axios.get('./api/headerList.json').then((res) => {
//           let data = getSearchList(res.data.data);
//           dispatch(data);
//       }).catch((data) => {

//       })
//   }
// }
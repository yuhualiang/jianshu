import { fromJS } from "immutable";
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.value.topicList),
        articleList: fromJS(action.value.articleList),
        recommendList: fromJS(action.value.recommendList)
      })
    default:
      return state;
  }
}
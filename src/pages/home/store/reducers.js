import { fromJS } from "immutable";
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  scrollTopShow: false
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.value.topicList),
        articleList: fromJS(action.value.articleList),
        recommendList: fromJS(action.value.recommendList)
      });
    case actionTypes.LOAD_MORE_ARTICAL:
      return state.merge({
        articleList: state.get('articleList').concat(action.value.articleList),
        articlePage: action.value.nextPage
      });
    case actionTypes.TOGGLE_SCROLL_TOP_SHOW:
      return state.set('scrollTopShow', action.value);
    default:
      return state;
  }
}
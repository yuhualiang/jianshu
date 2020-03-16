import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'GET_HOME_DATA':
      return state.merge({
        topicList: fromJS(action.value.topicList),
        articleList: fromJS(action.value.articleList),
        recommendList: fromJS(action.value.recommendList)
      })
    default:
      return state;
  }
}
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';
const defaultState = fromJS({
  title: '',
  content: '',
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAIL_DATA:
      return state.merge({
        title: action.value.title,
        content: action.value.content
      });
    default:
      return state;
  }
}
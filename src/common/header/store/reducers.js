import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  focused: false,
  mouseEnterSearchInfoStatus: false,
  searchInfoData: []
});

export default (state = defaultState, action) => {
  const type = action.type;
  switch (type) {
    case actionTypes.SWITCH_FOCUSE:
      return state.set('focused', !state.get('focused'));
    case actionTypes.CHANGE_MOUSE_ENTER_SEARCH_INFO_STATUS:
      return state.set('mouseEnterSearchInfoStatus', action.value);
    case actionTypes.GET_SEARCH_INFO_DATA:
      return state.set('searchInfoData', action.value);
    default:
      return state;
  }
}
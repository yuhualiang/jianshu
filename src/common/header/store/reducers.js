import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  focused: false
});

export default (state = defaultState, action) => {
  const type = action.type;
  if (type === actionTypes.SWITCH_FOCUSE) {
    return state.set('focused', !state.focused)
  }
  return state;
}
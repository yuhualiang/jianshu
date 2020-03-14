import {
  SWITCH_FOCUSE
} from './actionTypes';
const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  const type = action.type;
  if (type === SWITCH_FOCUSE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.focused = !newState.focused;

    return newState;
  }
  return state;
}
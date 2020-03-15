import {combineReducers} from 'redux-immutable';
import { reducers as headerReducers } from '../common/header/store';
import { reducers as homeReducers } from '../pages/home/store';

const reducers = combineReducers({
  header: headerReducers,
  home: homeReducers
});

export default reducers;

import {combineReducers} from 'redux-immutable';
import { reducers as headerReducers } from '../common/header/store';
import { reducers as homeReducers } from '../pages/home/store';
import { reducers as detailReducers } from '../pages/detail/store';

const reducers = combineReducers({
  header: headerReducers,
  home: homeReducers,
  detail: detailReducers
});

export default reducers;

import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import undoable from 'redux-undo';

import setting from './setting';

export default combineReducers({
  setting: undoable(setting),
  router: routeReducer
});

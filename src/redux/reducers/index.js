import { combineReducers } from 'redux';
import detailUserReducer from './detailUser';
import destination from './destination';
import activityOfDestination from './activity';

const rootReducers = combineReducers({
  detailUser: detailUserReducer,
  destination: destination,
  activityOfDestination: activityOfDestination
});

export default rootReducers;

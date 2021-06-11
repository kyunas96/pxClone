import { combineReducers } from 'redux';
import profileReducer from './profileReducer';

const uiReducer = combineReducers({
  profile: profileReducer
})

export default uiReducer;
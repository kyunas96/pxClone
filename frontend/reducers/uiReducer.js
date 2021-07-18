import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import followReducer from './followReducer';


const uiReducer = combineReducers({
  profile: profileReducer,
  following: followReducer
})

export default uiReducer;
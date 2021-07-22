import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import ProfilePostsReducer from './profilePostsReducer';
import followReducer from './followReducer';


const uiReducer = combineReducers({
  profile: profileReducer,
  profilePosts: ProfilePostsReducer,
  following: followReducer,
})

export default uiReducer;
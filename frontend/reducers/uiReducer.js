import { combineReducers } from 'redux';
import profileReducer from './profileReducer';
import ProfilePostsReducer from './profilePostsReducer';


const uiReducer = combineReducers({
  profile: profileReducer,
  profilePosts: ProfilePostsReducer,

})

export default uiReducer;
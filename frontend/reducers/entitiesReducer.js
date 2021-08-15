import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import usersReducer from './usersReducer';
import followsReducer from './followsReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: PostsReducer,
  follows: followsReducer
})

export default entitiesReducer;
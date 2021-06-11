import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import usersReducer from './usersReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: PostsReducer
})

export default entitiesReducer;
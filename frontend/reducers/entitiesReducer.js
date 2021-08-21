import { combineReducers } from 'redux';
import LikesReducer from './likesReducer';
import PostsReducer from './postsReducer';
import UsersReducer from './usersReducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  likes: LikesReducer
})

export default entitiesReducer;
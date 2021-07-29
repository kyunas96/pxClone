import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import usersReducer from './usersReducer';
import LikesReducer from './likedPostsReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: PostsReducer,
  likedPosts: LikesReducer
})

export default entitiesReducer;
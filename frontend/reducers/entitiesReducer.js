import { combineReducers } from 'redux';
import PostsReducer from './postsReducer';
import usersReducer from './usersReducer';
import LikesReducer from './likedPostsReducer';
import followedUsers from './followedUsersReducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  followedUsers,
  posts: PostsReducer,
  likedPosts: LikesReducer
})

export default entitiesReducer;
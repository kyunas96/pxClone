import { combineReducers } from 'redux';
import LikesReducer from './likesReducer';
import PostsReducer from './postsReducer';
import UsersReducer from './usersReducer';
import FollowsReducer from './followsReducer';

const entitiesReducer = combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
  likes: LikesReducer,
  follows: FollowsReducer
})

export default entitiesReducer;
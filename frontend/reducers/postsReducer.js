import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  UPDATE_POST,
} from "../actions/postActions";
import { UPDATE_LIKE } from "../actions/likeActions";

const defaultState = {
  posts: {},
  likedPosts: []
}

const PostsReducer = (state = defaultState, action) => {
  console.log("PostsReducer", action)
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_POST:
      return {
        ...state,
        ...action.post
      }
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts,
      };
    case UPDATE_POST:
      return {
        ...state,
        ...action.post,
      };
    case UPDATE_LIKE:
      const post = state[action.post.id];
      post.liked = action.post.liked;
      return {
        ...state,
        ...post,
      };
    default:
      return state;
  }
};

export default PostsReducer;

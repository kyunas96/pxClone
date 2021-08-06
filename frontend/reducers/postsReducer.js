import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  UPDATE_POST,
} from "../actions/postActions";

import { RECEIVE_USER } from "../actions/userActions";
import { ADD_LIKE, REMOVE_LIKE } from "../actions/likeActions";
import { SESSION_LOGOUT } from "../actions/sessionActions";

const defaultState = {
  posts: {},
  likedPosts: [],
};

const PostsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let curPost;

  switch (action.type) {
    case RECEIVE_POST:
      console.log("postsReducer", action);

      return {
        posts: {
          ...state.posts,
          ...action.post,
        },
        likedPosts: state.likedPosts,
      };
    case RECEIVE_POSTS:
      return {
        posts: {
          ...state.posts,
          ...action.payload.posts,
        },
        likedPosts: action.payload.likedPosts,
      };
    case RECEIVE_USER:
      return {
        posts: {
          ...state.posts,
          ...action.payload.posts,
        },
        likedPosts: state.likedPosts,
      };
    case ADD_LIKE:
      newState.posts[action.post.id].liked = true;
      !newState.likedPosts.includes(action.post.id) &&
        newState.likedPosts.push(action.post.id);
      return {
        posts: {
          ...newState.posts,
        },
        likedPosts: newState.likedPosts,
      };
    case REMOVE_LIKE:
      newState.posts[action.post.id].liked = false;
      let likes = [];
      if (newState.likedPosts.includes(action.post.id)) {
        const likeIndex = newState.likedPosts.indexOf(action.post.id);
        const left = newState.likedPosts.slice(0, likeIndex);
        const right = newState.likedPosts.slice(likeIndex + 1);
        likes = left.concat(right);
      }
      return {
        posts: {
          ...newState.posts,
        },
        likedPosts: likes,
      };
    case SESSION_LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default PostsReducer;

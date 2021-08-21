import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  UPDATE_POST,
} from "../actions/postActions";

import { RECEIVE_USER } from "../actions/userActions";
import { ADD_LIKE, REMOVE_LIKE, RECEIVE_LIKES } from "../actions/likeActions";
import { SESSION_LOGIN, SESSION_LOGOUT } from "../actions/sessionActions";

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let curPost;

  switch (action.type) {
    case RECEIVE_POST:
      return Object.assign({}, newState, action.post);
    case RECEIVE_POSTS:
      return {
        ...state.posts,
        ...action.payload.posts,
      };
    case RECEIVE_USER:
      return Object.assign({}, newState, action.payload.posts)
    case RECEIVE_LIKES:
      return Object.assign(newState, action.payload.posts);
    case SESSION_LOGIN:
      return {
        ...newState.posts,
        ...action.payload.posts,
      };
    case SESSION_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default PostsReducer;

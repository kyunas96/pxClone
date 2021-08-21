import {
  RECEIVE_USER,
  RECEIVE_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
} from "../actions/userActions";

import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/postActions";
import { ADD_FOLLOW, REMOVE_FOLLOW, RECEIVE_FOLLOWS, RECEIVE_FOLLOWINGS } from "../actions/followActions";
import { SESSION_LOGIN, SESSION_LOGOUT } from "../actions/sessionActions";

const defaultState = {
  users: {},
  followedUsers: [],
};

const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let currentUser;
  switch (action.type) {
    case RECEIVE_USER:
      currentUser = newState.users[action.payload.user.id] || {};
      let receivedUser = Object.assign(currentUser, action.payload.user);
      newState.users[action.payload.user.id] = receivedUser;
      return newState;
    // this case will be called when the posts for a user's feed are retrieved
    // and with them the ids of the users that are being followed by the
    // current user
    case RECEIVE_POSTS:
      newState.followedUsers = action.payload.followedUsers
      return newState;
    // this case will called when a userProfile is grabbed or when the follow
    // status of a user changes
    case RECEIVE_POST:
      currentUser = newState.users[action.post.posterId] || {};
      currentUser.userPhoto = action.post.userPhoto;
      newState.users[action.post.posterId] = currentUser;
      return newState;
    case UPDATE_USER:
      currentUser = newState.users[action.payload.user.id];
      currentUser = Object.assign(currentUser, action.payload.user);
      newState.users[action.payload.user.id] = currentUser;
      return newState;
    case RECEIVE_FOLLOWS:
      return Object.assign(newState, action.payload.users);
    case RECEIVE_FOLLOWINGS:
      return Object.assign(newState, action.payload.users);
    case SESSION_LOGIN:
      newState.users[action.payload.user.id] = action.payload.user;
      return {
        users: {
          ...newState.users
        },
        followedUsers: newState.followedUsers
      }
    case SESSION_LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default UsersReducer;

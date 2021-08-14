import {
  RECEIVE_USER,
  RECEIVE_USERS,
  UPDATE_USER,
} from "../actions/userActions";

import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/postActions";
import { ADD_FOLLOW, REMOVE_FOLLOW } from "../actions/followActions";
import { SESSION_LOGIN, SESSION_LOGOUT } from "../actions/sessionActions";

const defaultState = {
  users: {},
  followedUsers: [],
};

const usersReducer = (state = defaultState, action) => {
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
    case RECEIVE_USERS:
      // const payload = action.payload;
      // for(const[key, val] of Object.entries(payload)){
      //   const curUser = newState.users[val.id] || {};
      //   const updatedUser = Object.assign(curUser, val);
      //   newState.users[val.id] = updatedUser;
      // }
      return newState;
    case RECEIVE_POSTS:
      newState.followedUsers = action.payload.followedUsers
      return newState;
    // this case will called when a userProfile is grabbed or when the follow
    // status of a user changes
    case RECEIVE_POST:
      currentUser = newState.users[action.post.posterId] || {};
      const unpackedUser = Object.values(action.post)[0];
      currentUser.userPhoto = unpackedUser.userPhoto
      newState.users[unpackedUser.posterId] = currentUser;
      return newState;
    case UPDATE_USER:
      currentUser = newState.users[action.payload.user.id];
      currentUser = Object.assign(currentUser, action.payload.user);
      newState.users[action.payload.user.id] = currentUser;
      return newState;
    case ADD_FOLLOW:
      currentUser = newState.users[action.data.userId] || {id: action.data.userId};
      currentUser.following = true;
      newState.users[action.data.userId] = currentUser;
      !newState.followedUsers.includes(action.data.userId) &&
        newState.followedUsers.push(action.data.userId);
      return {
        users: {
          ...newState.users,
        },
        followedUsers: newState.followedUsers
      }
    case REMOVE_FOLLOW:
      currentUser = newState.users[action.data.userId] || {id: action.data.userId};
      currentUser.following = false;
      newState.users[action.data.userId] = currentUser;
      let follows = [];
      const likeIndex = newState.followedUsers.indexOf(action.data.userId);
      const left = newState.followedUsers.slice(0, likeIndex);
      const right = newState.followedUsers.slice(likeIndex + 1);
      follows = left.concat(right);
      return {
        users: {
          ...newState.users,
        },
        followedUsers: follows,
      };
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

export default usersReducer;

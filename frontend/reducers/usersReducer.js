import {
  RECEIVE_USER,
  RECEIVE_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
} from "../actions/userActions";

import { RECEIVE_POSTS } from "../actions/postActions";
import { ADD_FOLLOW, REMOVE_FOLLOW } from "../actions/followActions";

const defaultState = {
  users: {},
  followedUsers: [],
};

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      newState.users[action.payload.user.id] = action.payload.user;
      return newState;
    // this case will be called when the posts for a user's feed are retrieved
    // and with them the ids of the users that are being followed by the
    // current user
    case RECEIVE_POSTS:
      return {
        users: {
          ...state.users,
        },
        followedUsers: action.payload.followedUsers,
      };
    // this case will called when a userProfile is grabbed or when the follow
    // status of a user changes
    case UPDATE_USER:
      newState.users[action.payload.user.id] = action.payload.user;
      return newState;
    case ADD_FOLLOW:
      newState.users[action.data.userId].following = true;
      !newState.followedUsers.includes(action.data.userId) &&
        newState.followedUsers.push(action.data.userId);
      return newState;
    case REMOVE_FOLLOW:
      newState.users[action.data.userId].following = false;
      let follows = [];
      const likeIndex = newState.followedUsers.indexOf(action.data.userId);
      const left = newState.followedUsers.slice(0, likeIndex);
      const right = newState.followedUsers.slice(likeIndex + 1);
      follows = left.concat(right);
      return {
        users: {
          ...newState.users
        },
        followedUsers: follows
      }
    default:
      return state;
  }
};

export default usersReducer;

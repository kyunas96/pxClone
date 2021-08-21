import { RECEIVE_POSTS } from "../actions/postActions";

import {
  ADD_FOLLOW,
  REMOVE_FOLLOW,
  RECEIVE_FOLLOWS,
  RECEIVE_FOLLOWINGS,
} from "../actions/followActions";
import { SESSION_LOGOUT } from "../actions/sessionActions";

const FollowsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let currentUserFollowings;
  switch (action.type) {
    case RECEIVE_POSTS:
      currentUserFollowings = newState[action.payload.userId] || {};
      currentUserFollowings.followings = action.payload.followedUsers;
      newState[action.payload.userId] = currentUserFollowings
      return newState;
    case RECEIVE_FOLLOWS:
      newState[action.data.userId].followers = action.data.followerIds;
      return newState;
    case RECEIVE_FOLLOWINGS:
      newState[action.data.userId].followings = action.data.followingIds;
      return newState;
    case ADD_FOLLOW:
      currentUserFollowings =
        newState[action.data.curUserId]?.followings || [];
      if (!currentUserFollowings.includes(action.data.userId)) {
        currentUserFollowings.push(action.data.userId);
      }
      newState[action.data.curUserId].followings = currentUserFollowings;
      return newState;
    case REMOVE_FOLLOW:
      currentUserFollowings =
        newState[action.data.curUserId]?.followings || [];
      currentUserFollowings = currentUserFollowings.filter(
        (userId) => userId !== action.data.userId
      );
      newState[action.data.curUserId].followings = currentUserFollowings;
      return newState;
    case SESSION_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default FollowsReducer;

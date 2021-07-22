import {
  RECEIVE_PROFILE_POSTS,
  RESET_PROFILE_POSTS,
} from "../actions/profileActions";

const ProfilePostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE_POSTS:
      return action.posts;
    case RESET_PROFILE_POSTS:
      return {};
    default:
      return state;
  }
};

export default ProfilePostsReducer;

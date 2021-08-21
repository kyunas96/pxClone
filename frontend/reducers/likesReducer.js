import { RECEIVE_LIKES } from "../actions/likeActions";
import { SESSION_LOGOUT } from "../actions/sessionActions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_LIKES:
      newState[action.payload.userId] = action.payload.likedPosts;
      return newState;
    case SESSION_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default LikesReducer;

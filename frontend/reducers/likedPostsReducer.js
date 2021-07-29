import {
  RECEIVE_LIKES,
  ADD_LIKE,
  REMOVE_LIKE,
} from "../actions/likeActions.js";

const LikesReducer = (state = new Set(), action) => {
  console.log("likes reducer", action);
  const newState = new Set(state);
  switch (action.type) {
    case RECEIVE_LIKES:
      action.likes.forEach((like) => newState.add(like));
      return newState;
    case ADD_LIKE:
      if (!newState.has(action.like)) {
        newState.add(action.like);
      }
      return newState;
    case REMOVE_LIKE:
      if (newState.has(action.like)) {
        newState.delete(action.like);
      }
      return newState;
    default:
      return state;
  }
};

export default LikesReducer;

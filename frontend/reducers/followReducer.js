import { RECEIVE_FOLLOW } from "../actions/followActions";

const followReducer = (state = null, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_FOLLOW:
      return action.follow.following
    default:
      return state;
  }
};

export default followReducer;

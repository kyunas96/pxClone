import { RECEIVE_FOLLOW } from "../actions/followActions";

const followReducer = (state = {}, action) => {
  console.log("freducer",)
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_FOLLOW:
      return action.follow
    default:
      return state;
  }
};

export default followReducer;

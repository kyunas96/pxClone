import { RECEIVE_FOLLOWS, RECEIVE_FOLLOWINGS } from "../actions/followActions";

const followsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let ids;
  switch (action.type) {
    case RECEIVE_FOLLOWS:
      ids = Object.keys(action.payload.follows).map((id) => parseInt(id));
      newState[action.payload.userId] = ids;
      return newState;
    case RECEIVE_FOLLOWINGS:
      ids = Object.keys(action.payload.followings).map((id) =>
        parseInt(id)
      );
      newState[action.payload.userId] = ids;
      return newState;
    default:
      return state;
  }
};

export default followsReducer;

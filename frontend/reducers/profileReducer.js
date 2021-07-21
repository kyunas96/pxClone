import { RECEIVE_PROFILE, RESET_PROFILE } from "../actions/profileActions";

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      let newState = Object.assign({}, state, action.profile)
      return newState;
    case RESET_PROFILE:
      return {};
    default:
      return state;
  }
};

export default profileReducer;

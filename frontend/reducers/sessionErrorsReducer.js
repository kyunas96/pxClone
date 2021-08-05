import { SESSION_LOGIN, RESET_SESSION_ERRORS } from "../actions/sessionActions";

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SESSION_LOGIN:
      // return action.payload.errors;
      return state;
    case RESET_SESSION_ERRORS:
      return {};
    default:
      return state;
  }
};

export default sessionErrorsReducer;

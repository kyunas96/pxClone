import { SESSION_LOGIN, RESET_SESSION_ERRORS, RECEIVE_SESSION_ERRORS } from "../actions/sessionActions";

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case SESSION_LOGIN:
      if(action.payload.errors){
        return action.payload.errors
      }
      return state;
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RESET_SESSION_ERRORS:
      return [];
    default:
      return state;
  }
};

export default sessionErrorsReducer;

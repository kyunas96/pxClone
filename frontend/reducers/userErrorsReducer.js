import { RECEIVE_USER_ERRORS, RESET_USER_ERRORS } from "../actions/userActions";

const UserErrorsReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_USER_ERRORS:
      return {error: action.payload.error};
    case RESET_USER_ERRORS:
      return {};
    default:
        return state;
  }
}

export default UserErrorsReducer;
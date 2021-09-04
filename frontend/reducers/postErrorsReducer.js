import { RECEIVE_POST_ERRORS, RESET_POST_ERRORS } from "../actions/postActions";

const postErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POST_ERRORS:
      return {error: action.payload.error};
    case RESET_POST_ERRORS:
      return {};
    default:
      return state;
  }
}

export default postErrorsReducer;
import { SESSION_LOGIN } from '../actions/sessionActions';

const sessionErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case SESSION_LOGIN:
      return action.sessionErrors
    default:
      return state
  }
}

export default sessionErrorsReducer;
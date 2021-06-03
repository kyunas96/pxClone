import { SESSION_LOGIN, SESSION_LOGOUT } from '../actions/sessionActions';

const sessionReducer = (state ={}, action) => {
  Object.freeze(state)
  switch(action.type){
    case SESSION_LOGIN:
      console.log(action.session)
      return action.session
    case SESSION_LOGOUT:
      return {}
    default:
      return state;
  }
}

export default sessionReducer;
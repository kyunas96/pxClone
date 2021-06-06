import { SESSION_LOGIN, SESSION_LOGOUT } from '../actions/sessionActions';

const checkActionForUser = ({ payload }) => {
  return (payload.user.id !== null && payload.user.username.length > 0)
}

const nullUser = {
  loggedIn: false,
  currentUser: null
}

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type){
    case SESSION_LOGIN:
      if(checkActionForUser(action)){
        return {
          loggedIn: true,
          currentUser: action.payload.user
        }
      }else{
        return nullUser;
      }
    case SESSION_LOGOUT:
      return nullUser;
    default:
      return state;
  }
}

export default sessionReducer;
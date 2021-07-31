import { SESSION_LOGIN, SESSION_LOGOUT } from '../actions/sessionActions';

const checkActionForUser = ({ currentUser }) => {
  console.log("check for user", currentUser)
  return (currentUser.id !== null && currentUser.username.length > 0)
}

const nullUser = {
  loggedIn: false,
  currentUser: null
}

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state)
  switch(action.type){
    case SESSION_LOGIN:
      if(checkActionForUser(action.user)){
        return action.user
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
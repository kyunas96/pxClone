import { SESSION_LOGIN, SESSION_LOGOUT } from '../actions/sessionActions';

const checkActionForUser = ({ payload }) => {
  console.log(payload.user.id)
  // console.log("inspecting payload:" + payload.user.id);
  return (payload.user.id !== null && payload.user.username.length > 0)
}

const nullUser = {
  loggedIn: false,
  currentUser: null
}

const sessionReducer = (state = nullUser, action) => {
  console.log(action);
  Object.freeze(state)
  switch(action.type){
    case SESSION_LOGIN:
      if(checkActionForUser(action)){
        console.log("action has user")
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
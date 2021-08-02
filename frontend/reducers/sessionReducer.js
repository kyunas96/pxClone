import { SESSION_LOGIN, SESSION_LOGOUT } from "../actions/sessionActions";

const checkActionForUser = (user) => {
  return user.id !== null && user.username.length > 0;
};

const nullUser = {
  loggedIn: false,
  currentUser: null,
};

const sessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SESSION_LOGIN:
      if (checkActionForUser(action.payload.user)) {
        return {
          currentUser: { ...action.payload.user},
          loggedIn: true
        };
      } else {
        return nullUser;
      }
    case SESSION_LOGOUT:
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;

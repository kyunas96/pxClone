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
      return {
        currentUser: {
          id: action.payload.user.id,
          username: action.payload.user.username,
        },
        loggedIn: true,
      };
    case SESSION_LOGOUT:
      window.localStorage.clear();
      return nullUser;
    default:
      return state;
  }
};

export default sessionReducer;

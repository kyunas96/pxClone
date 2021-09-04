import * as SessionAPI from "../util/SessionAPI";

export const SESSION_LOGIN = "SESSION_LOGIN";
export const SESSION_LOGOUT = "SESSION_LOGOUT";
export const RESET_SESSION_ERRORS = "RESET_SESSION_ERRORS";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const sessionLogin = (payload) => ({
  type: SESSION_LOGIN,
  payload,
});

export const sessionLogout = () => ({
  type: SESSION_LOGOUT,
});

export const resetSessionErrors = () => ({
  type: RESET_SESSION_ERRORS,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

export const requestLogin = (session) => (dispatch) => {
  return SessionAPI.requestLogin(session).then(
    ({data}) => {
      dispatch(sessionLogin(data));
    },
    ({response}) => {
      dispatch(receiveSessionErrors(response.data));
    }
  );
};

export const requestLogout = () => (dispatch) =>
  SessionAPI.requestLogout().then(() => dispatch(sessionLogout()));

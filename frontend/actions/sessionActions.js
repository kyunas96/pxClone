import * as SessionAPI from '../util/SessionAPI';

export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS';

export const sessionLogin = payload => ({
  type: SESSION_LOGIN,
  payload
})

export const sessionLogout = () => ({
  type: SESSION_LOGOUT
})

export const resetSessionErrors = () => ({
  type: RESET_SESSION_ERRORS
})

export const requestLogin = session => dispatch => {
 return SessionAPI.requestLogin(session)
    .then(data => dispatch(sessionLogin(data)))
}

export const requestLogout = () => dispatch => (
  SessionAPI.requestLogout()
    .then(() => dispatch(sessionLogout()))
)



// session:
// errors: []
// user: { id: 1, username: "kevin" }
// __proto__: Object
// type: "SESSION_LOGIN"
// __proto__: Object
import * as SessionAPI from '../util/SessionAPI';

export const SESSION_LOGIN = 'SESSION_LOGIN';
export const SESSION_LOGOUT = 'SESSION_LOGOUT';

const sessionLogin = session => ({
  type: SESSION_LOGIN,
  session
})

const sessionLogout = () => ({
  type: SESSION_LOGOUT
})

export const requestLogin = session => dispatch => (
  SessionAPI.requestLogin(session)
    .then(data => dispatch(sessionLogin(data)))
)

export const requestLogout = () => dispatch => (
  SessionAPI.requestLogout()
    .then(() => dispatch(sessionLogout()))
)
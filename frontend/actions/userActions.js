import * as APIUtil from '../util/UserAPI';
import { sessionLogin } from './sessionActions';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  users
})

const receiveUser = payload => ({
  type: RECEIVE_USER,
  payload
})

export const requestUsers = () => dispatch => (
  APIUtil.requestUsers()
    .then(data => dispatch(receiveUsers(data)))
)

export const requestUser = userId => dispatch => (
  APIUtil.requestUser(userId)
    .then(data => dispatch(receiveUser(data)))
)

export const createUser = user => dispatch => (
  APIUtil.createUser(user)
    .then(data => {
      dispatch(receiveUser(data))
      dispatch(sessionLogin(data))
    })
)

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(data => dispatch(receiveUser(data)))
)


// Sign Up action layout
// type: "RECEIVE_USER"
// user: { user: { … }, errors: Array(2) }
// __proto__: Object
import * as APIUtil from '../util/APIUtil';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
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
    .then(data => dispatch(receiveUser(data)))
)

export const updateUser = user => dispatch => (
  APIUtil.updateUser(user)
    .then(data => dispatch(receiveUser(data)))
)


import * as APIUtil from "../util/UserAPI";
import { receiveSessionErrors, sessionLogin, resetSessionErrors } from "./sessionActions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RESET_USER_ERRORS = 'RESET_USER_ERRORS';

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload,
});

const receiveUserErrors = (payload) => ({
  type: RECEIVE_USER_ERRORS,
  payload
});

const resetUserErrors = () => ({
  type: RESET_USER_ERRORS
})


export const requestUser = (userId) => (dispatch) =>
  APIUtil.requestUser(userId).then(
    ({data}) => {
      dispatch(resetUserErrors())
      dispatch(receiveUser(data))
    },
    ({response}) => dispatch(receiveUserErrors(response.data))
    );

export const createUser = (user) => (dispatch) =>
  APIUtil.createUser(user).then(
    (data) => {
      dispatch(resetSessionErrors());
      dispatch(receiveUser(data));
      dispatch(sessionLogin(data));
    },
    ({response}) => {
      console.log("user create", response)
      dispatch(receiveSessionErrors(response.data));
    }
  );

export const updateUser = (user) => (dispatch) =>
  APIUtil.updateUser(user).then((data) => dispatch(receiveUser(data)));

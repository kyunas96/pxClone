import * as APIUtil from "../util/UserAPI";
import { receiveSessionErrors, sessionLogin } from "./sessionActions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const UPDATE_USER = "UPDATE_USER";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload,
});

export const requestUser = (userId) => (dispatch) =>
  APIUtil.requestUser(userId).then((data) => dispatch(receiveUser(data)));

export const createUser = (user) => (dispatch) =>
  APIUtil.createUser(user).then(
    (data) => {
      dispatch(receiveUser(data));
      dispatch(sessionLogin(data));
    },
    (data) => {
      dispatch(receiveSessionErrors(JSON.parse(data.responseText)));
    }
  );

export const updateUser = (user) => (dispatch) =>
  APIUtil.updateUser(user).then((data) => dispatch(receiveUser(data)));

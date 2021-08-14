import * as FollowAPI from "../util/FollowAPI";
import { RECEIVE_USERS } from "./userActions";

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const ADD_FOLLOW = "ADD_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const UPDATE_FOLLOW = 'UPDATE_FOLLOW';




const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

const receiveFollows = follows => ({
  type: RECEIVE_USERS,
  users: follows
})

const receiveFollowings = followings => ({
  type: RECEIVE_USERS,
  users: followings
})

export const requestFollows = (userId) => (dispatch) => (
  FollowAPI.getFollowers(userId)
    .then(payload => dispatch(receiveFollows(payload)))
) 

export const requestFollowings = (userId) => (dispatch) => (
  FollowAPI.getFollowings(userId)
    .then(payload => dispatch(receiveFollowings(payload)))
)


export const addFollow = (profileId) => (dispatch) => {
  FollowAPI.createFollow(profileId).then((data) => {
    dispatch({
      type: ADD_FOLLOW,
      data
    })
  });
}

export 

export const removeFollow = (profileId) => (dispatch) => {
  FollowAPI.deleteFollow(profileId).then((data) => {
    dispatch({
      type: REMOVE_FOLLOW,
      data
    })
  });
}


export const getFollowStatus = (userId) => (dispatch) => (
  FollowAPI.getFollowing(userId)
    .then((data) => dispatch(receiveFollow(data)))
)

import * as FollowAPI from "../util/FollowAPI";
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const RECEIVE_FOLLOWS = "RECEIVE_FOLLOWS";
export const RECEIVE_FOLLOWINGS = "RECEIVE_FOLLOWINGS";
export const ADD_FOLLOW = "ADD_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const UPDATE_FOLLOW = 'UPDATE_FOLLOW';


const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})

export const addFollow = (profileId) => (dispatch) => {
  FollowAPI.createFollow(profileId).then((data) => {
    dispatch({
      type: ADD_FOLLOW,
      data
    })
  });
}

export const removeFollow = (profileId) => (dispatch) => {
  FollowAPI.deleteFollow(profileId).then((data) => {
    dispatch({
      type: REMOVE_FOLLOW,
      data
    })
  });
}

export const receiveFollowers = (follows) => ({
  type: RECEIVE_FOLLOWS,
  follows 
})

export const receiveFollowings = (followings) => ({
  type: RECEIVE_FOLLOWINGS,
  followings
})

export const requestFollowers = (userId) => (dispatch) => {
  FollowAPI.getFollowers(userId)
    .then(data => dispatch(receiveFollowers(data)))
}

export const requestFollowings = (userId) => (dispatch) => {
  FollowAPI.getFollowings(userId)
    .then(data => dispatch(receiveFollowings(data)))
}


export const getFollowStatus = (userId) => (dispatch) => (
  FollowAPI.getFollowing(userId)
    .then((data) => dispatch(receiveFollow(data)))
)

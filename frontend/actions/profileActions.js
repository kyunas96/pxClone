import * as ProfileAPI from '../util/ProfileAPI';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RECEIVE_PROFILE_POSTS = 'RECEIVE_PROFILE_POSTS';
export const RESET_PROFILE_POSTS = "RESET_PROFILE_POSTS";
export const RESET_PROFILE = 'RESET_PROFILE';

const receiveProfilePosts = posts => ({
  type: RECEIVE_PROFILE_POSTS,
  posts
})

const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
})

export const getProfile = userId => (dispatch) => (
  ProfileAPI.getProfile(userId)
    .then(data => dispatch(receiveProfile(data)))
)

export const updateProfile = (userId, profile) => (
  ProfileAPI.updateProfile(userId, profile)
    .then(data => dispatch(receiveProfile(data)))
)

export const resetProfile = () => (dispatch) => (
  dispatch({type: RESET_PROFILE})
)

export const getProfilePosts = (userId) => (dispatch) => {
  dispatch({type: RESET_PROFILE_POSTS})
  ProfileAPI.requestUsersPosts(userId)
    .then(data => dispatch(receiveProfilePosts(data)))
}
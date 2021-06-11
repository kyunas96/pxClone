import * as ProfileAPI from '../util/ProfileAPI';

export const RECEIVE_PROFILE = 'RECEIVE_PROFILE';
export const RESET_PROFILE = 'RESET_PROFILE';

const receiveProfile = profile => ({
  type: RECEIVE_PROFILE,
  profile
})

export const getProfile = userId => dispatch => (
  ProfileAPI.getProfile(userId)
    .then(data => receiveProfile(data))
)

export const resetProfile = () => dispatch => (
  dispatch({type: RESET_PROFILE})
)
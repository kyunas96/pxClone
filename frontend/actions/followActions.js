import * as FollowAPI from "../util/FollowAPI";
export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
})


export const toggleFollow = (following, profileId) => (dispatch) => {
  if (following === true) {
    FollowAPI.deleteFollow(profileId).then((data) =>
      dispatch(receiveFollow(data))
    );
  } else {
    FollowAPI.createFollow(profileId).then((data) =>
      dispatch(receiveFollow(data))
    );
  }
};

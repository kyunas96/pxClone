import * as FollowAPI from "../util/FollowAPI";
import { receiveProfile } from "./profileActions";

export const toggleFollow = (following, profileId) => (dispatch) => {
  if (following === true) {
    FollowAPI.deleteFollow(profileId).then((data) =>
      dispatch(receiveProfile(data))
    );
  } else {
    FollowAPI.createFollow(profileId).then((data) =>
      dispatch(receiveProfile(data))
    );
  }
};

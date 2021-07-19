import { RECEIVE_PROFILE, RESET_PROFILE } from "../actions/profileActions";

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROFILE:
      const { user_id, isCurrentUser, user_photo, banner_image } =
        action.profile;
      return { user_id, isCurrentUser, user_photo, banner_image };
    case RESET_PROFILE:
      return {};
    default:
      return state;
  }
};

export default profileReducer;

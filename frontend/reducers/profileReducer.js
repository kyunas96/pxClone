import { RECEIVE_PROFILE, RESET_PROFILE } from '../actions/profileActions';

const profileReducer = (state = {}, action) => {
  Object.freeze(state);
  const [user_id, isCurrentUser, user_photo, banner_image] = action.profile
  switch(action.type){
    case RECEIVE_PROFILE:
      return {user_id, isCurrentUser, user_photo, banner_image}
    case RESET_PROFILE:
      return {}
    default:
      return state;
  }
}

export default profileReducer;
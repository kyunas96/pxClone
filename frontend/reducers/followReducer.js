export const RECEIVE_PROFILE = "RECEIVE_PROFILE";

const followReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_PROFILE:
      return action.profile.userInfo.following
    default:
      return state;
  }
};

export default followReducer;

import { RECEIVE_USER } from "../actions/userActions";
import { SESSION_LOGOUT } from "../actions/sessionActions";

const UIReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return {
        currentProfileId: action.payload.user.id,
      };
    case SESSION_LOGOUT:
      return {}
    default:
      return state;
  }
};

export default UIReducer;

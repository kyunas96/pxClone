import { RECEIVE_USER } from "../actions/userActions";
import { SESSION_LOGOUT } from "../actions/sessionActions";
import { TOGGLE_DROPDOWN, COLLAPSE_DROPDOWN } from "../actions/uiActions";

const _defaultState = {
  currentProfileId: undefined,
  dropdownIsVisible: false,
};

const UIReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case TOGGLE_DROPDOWN:
      return {
        ...state,
        dropdownIsVisible: !state.dropdownIsVisible,
      };
    case COLLAPSE_DROPDOWN:
      return {
        ...state,
        dropdownIsVisible: false
      }
    case RECEIVE_USER:
      return {
        currentProfileId: action.payload.user.id,
        dropdownIsVisible: state.dropdownIsVisible,
      };
    case SESSION_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default UIReducer;

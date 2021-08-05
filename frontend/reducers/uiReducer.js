import { RECEIVE_USER } from "../actions/userActions";

const UIReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_USER:
      return {
        currentProfileId: action.payload.user.id
      }
      default: 
        return state;
  }
}

export default UIReducer;
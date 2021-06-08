import { RECEIVE_USER, RECEIVE_USERS } from '../actions/userActions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    case RECEIVE_USER:
      newState[action.payload.user.id] = action.payload.user
      return newState;
    default:
      return state
  }
}

export default usersReducer;
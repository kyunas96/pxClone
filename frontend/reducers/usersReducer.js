// import { RECEIVE_USER, RECEIVE_USER } from '../actions/userActions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state)
  switch(action.type){
    default:
      return state
  }
}

export default usersReducer;
import { ADD_LIKE, REMOVE_LIKE, RECEIVE_LIKES } from "../actions/likeActions";
import { RECEIVE_POSTS } from "../actions/postActions";
import { SESSION_LOGOUT } from "../actions/sessionActions";

const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let curUserLikes;
  // now the payload will have the user's id attached to it and thus can be accessed
  // within the payload

  switch (action.type) {
    case RECEIVE_POSTS:
      if(action.payload.likedPosts !== undefined){
        newState[action.payload.userId] = action.payload.likedPosts;
      }else{
        return newState;
      }
    case RECEIVE_LIKES:
      newState[action.payload.userId] = action.payload.likedPosts;
      return newState;
    case ADD_LIKE:
      curUserLikes = newState[action.payload.userId] || [];
      if(!curUserLikes.includes(action.payload.id)){
        curUserLikes.push(action.payload.id)
      }
      newState[action.payload.userId] = curUserLikes;
      return newState;
    case REMOVE_LIKE:
      curUserLikes = newState[action.payload.userId] || [];
      if(curUserLikes.includes(action.payload.id)){
        curUserLikes = curUserLikes.filter(id => id !== action.payload.id)
      }
      newState[action.payload.userId] = curUserLikes;
      return newState;
    case SESSION_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default LikesReducer;

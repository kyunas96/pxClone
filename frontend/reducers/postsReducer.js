import { RECEIVE_POST, RECEIVE_POSTS, UPDATE_POST } from '../actions/postActions';
import { UPDATE_LIKE } from '../actions/likeActions';
const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_POST:
      let newState = {
        ...state,
        ...action.post
      }
      return newState;
    case RECEIVE_POSTS:
      return {
        ...state,
        ...action.posts
      }
    case UPDATE_POST:
      return {
        ...state,
        ...action.post
      }
    case UPDATE_LIKE:
      const post = state[action.post.id];
      post.liked = action.post.liked
      return {
        ...state, 
        ...post
      }
    return {

    }

    default:
      return state;
  }
}

export default PostsReducer;
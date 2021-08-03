import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  UPDATE_POST,
} from "../actions/postActions";
import { ADD_LIKE, REMOVE_LIKE } from "../actions/likeActions";

const defaultState = {
  posts: {},
  likedPosts: [],
};

const PostsReducer = (state = defaultState, action) => {
  console.log("PostsReducer", action);
  Object.freeze(state);
  let newState = Object.assign({}, state);
  let curPost;

  switch (action.type) {
    case RECEIVE_POST:
      return {
        ...state,
        ...action.post,
      };
    case RECEIVE_POSTS:
      return {
        posts: {
          ...state.posts,
          ...action.payload.posts,
        },
        likedPosts: state.likedPosts,
      };
    case UPDATE_POST:
      return {
        ...state,
        ...action.post,
      };

    case ADD_LIKE:
      curPost = state.posts[action.post.id];
      curPost.liked = true;
      !newState.likedPosts.includes(action.post.id) &&
        newState.likedPosts.push(action.post.id);
      return {
        posts: {
          ...newState.posts,
          curPost,
        },
        likedPosts: newState.likedPosts,
      };
    case REMOVE_LIKE:
      curPost = state.posts[action.post.id];
      curPost.liked = false;
      let likes = [];
      if (newState.likedPosts.includes(action.post.id)) {
        const likeIndex = newState.likedPosts.indexOf(action.post.id);
        const left = newState.likedPosts.splice(0, likeIndex);
        const right = newState.likedPosts.splice(likeIndex + 1);
        likes = left.concat(right);
      }
      return {
        posts: {
          ...newState.posts,
          curPost
        },
        likedPosts: likes
      }

    default:
      return state;
  }
};

export default PostsReducer;

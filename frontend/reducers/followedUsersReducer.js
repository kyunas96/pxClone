import { RECEIVE_POSTS } from "../actions/postActions";

const FollowedUsersReducer = (state = new Set(), action) => {
  console.log("followedUsers", action)
  switch (action.type) {
    case RECEIVE_POSTS:
      let newState = new Set();
      const posts = Object.values(action.posts);
      posts.forEach((post) => newState.add(post.posterId));
      return newState;
    default:
      return state;
  }
};

export default FollowedUsersReducer;

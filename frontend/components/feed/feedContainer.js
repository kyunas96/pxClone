import { connect } from "react-redux";
import Feed from "./feed";
import { requestUsersFeed } from "../../actions/postActions";
import { fetchLikedPosts } from "../../actions/likeActions";

const mapStateToProps = (state) => {
  console.log("feedContainer", state);
  const posts = state.entities.posts.posts;
  const followedUsers = state.entities.users.followedUsers;
  // !!! Refactor the grabbing of feedPosts to work with the new followedUsers
  // format from the users slice of state

  // const feedPosts = {};
  // for(const [key, val] of Object.entries(posts)){
  //   if(followedUsers.includes(val.posterId)){
  //     feedPosts[key] = val;
  //   }
  // }
  const ret = {
    userId: state.session.currentUser.id,
  };
  console.log("feedContainer", ret)
  
  return ret;
};

const mapDispatchToProps = (dispatch) => ({
  likePost: (postId) => dispatch(likePost(postId)),
  getFeedItems: (userId) => dispatch(requestUsersFeed(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

// when on the backend, a like will be created by grabbing the currentUser's id
// and binding it the id of the post to create a new Like

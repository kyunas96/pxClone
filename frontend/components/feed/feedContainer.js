import { connect } from "react-redux";
import Feed from "./feed";
import { requestUsersFeed } from "../../actions/postActions";
import { fetchLikedPosts } from "../../actions/likeActions";

const mapStateToProps = (state) => {
  const posts = state.entities.posts;
  const followedUsers = Array.from(state.entities.followedUsers);
  const feedPosts = {};
  for(const [key, val] of Object.entries(posts)){
    if(followedUsers.includes(val.posterId)){
      feedPosts[key] = val;
    }
  }
  console.log(feedPosts)
  const ret = {
    userId: state.session.currentUser.id,
    feedPosts
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

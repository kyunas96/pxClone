import LikedPostsFeed from "./likedPostsFeed";
import { requestLikedPosts } from "../../actions/postActions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  const posts = state.entities.posts.posts;
  const likedPostsIds = state.entities.posts.likedPosts;
  const likedPosts = {};
  for (const [key, val] of Object.entries(posts)) {
    if (likedPostsIds.includes(val.id)) {
      likedPosts[val.id] = val;
    }
  }

  return {
    likedPosts
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestLikedPosts: () => dispatch(requestLikedPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LikedPostsFeed);

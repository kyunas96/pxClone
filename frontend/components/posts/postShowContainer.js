import { connect } from "react-redux";
import PostShow from "./PostShow";
import { requestPost, requestUpdatePost } from "../../actions/postActions";

const mSTP = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  console.log("mapstate", typeof postId)
  return {
    postId,
    post: state.entities.posts[postId],
    liked: state.entities.likedPosts.has(parseInt(postId)),
  };
};

const mDTP = (dispatch) => ({
  requestPost: (postId) => dispatch(requestPost(postId)),
  requestUpdatePost: (post) => dispatch(requestUpdatePost(post)),
});

export default connect(mSTP, mDTP)(PostShow);

import { connect } from "react-redux";
import PostShow from "./PostShow";
import { requestPost, requestUpdatePost } from "../../actions/postActions";
import { getPostShowNavIndices } from "../../util/Util";

const mSTP = (state, ownProps) => {
  const postId = parseInt(ownProps.match.params.postId);
  const posts = state.entities.posts;
  const postNavIndices = getPostShowNavIndices(postId, posts)
  const postErrors = state.errors.posts.error

  return {
    postId,
    post: state.entities.posts[postId],
    postErrors,
    prevPostId: postNavIndices.prevPostId,
    nextPostId: postNavIndices.nextPostId
  };
};

const mDTP = (dispatch) => ({
  requestPost: (postId) => dispatch(requestPost(postId)),
  requestUpdatePost: (post) => dispatch(requestUpdatePost(post)),
});

export default connect(mSTP, mDTP)(PostShow);

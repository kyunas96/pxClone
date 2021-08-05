import { connect } from "react-redux";
import PostShow from "./PostShow";
import { requestPost, requestUpdatePost } from "../../actions/postActions";
import { getPostShowNavIndices } from "../../util/Util";

const mSTP = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const posts = state.entities.posts.posts
  const postNavIndices = getPostShowNavIndices(parseInt(postId), posts)

  return {
    postId,
    post: state.entities.posts.posts[postId],
    prevPostId: postNavIndices.prevPostId,
    nextPostId: postNavIndices.nextPostId
  };
};

const mDTP = (dispatch) => ({
  requestPost: (postId) => dispatch(requestPost(postId)),
  requestUpdatePost: (post) => dispatch(requestUpdatePost(post)),
});

export default connect(mSTP, mDTP)(PostShow);

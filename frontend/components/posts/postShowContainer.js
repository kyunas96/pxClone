import { connect } from "react-redux";
import PostShow from "./PostShow";
import { requestPost, requestUpdatePost } from "../../actions/postActions";
import { getPostShowNavIndices } from "../../util/Util";

const mSTP = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  // do the logic here to get the prev and next image
  console.log("currentPostId", postId)
  console.log("postsContainer", state.entities.posts)
  const postNavIndices = getPostShowNavIndices(parseInt(postId), state.entities.posts)
  console.log("postNavIndices", postNavIndices);

  return {
    postId,
    post: state.entities.posts[postId],
    prevPostId: postNavIndices.prevPostId,
    nextPostId: postNavIndices.nextPostId
  };
};

const mDTP = (dispatch) => ({
  requestPost: (postId) => dispatch(requestPost(postId)),
  requestUpdatePost: (post) => dispatch(requestUpdatePost(post)),
});

export default connect(mSTP, mDTP)(PostShow);

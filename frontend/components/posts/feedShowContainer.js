import { connect } from "react-redux";
import PostShow from "./PostShow";
import { requestPost, requestUpdatePost } from "../../actions/postActions";
import { getPostShowNavIndices } from "../../util/Util";

const mapStateToProps = (state, ownProps) => {
  const postId = parseInt(ownProps.match.params.postId);
  const posts = Object.values(state.entities.posts.posts);
  const followedUsers = state.entities.users.followedUsers;
  const followedPosts = posts.filter(post => followedUsers.includes(post.posterId));


  const postNavIndices = getPostShowNavIndices(postId, followedPosts);

  return {
    postId,
    post: state.entities.posts.posts[postId],
    prevPostId: postNavIndices.prevPostId,
    nextPostId: postNavIndices.nextPostId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPost: (postId) => dispatch(requestPost(postId)),
    requestUpdatePost: (post) => dispatch(requestUpdatePost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);

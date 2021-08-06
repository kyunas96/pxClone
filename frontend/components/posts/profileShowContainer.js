import { connect } from "react-redux";
import PostShow from "./PostShow";
import { requestPost, requestUpdatePost } from "../../actions/postActions";

const mapStateToProps = (state, ownProps) => {
  const userId = parseInt(ownProps.match.params.userId)
  const postId = parseInt(ownProps.match.params.postId)
  const usersPosts = state.entities.users.users[userId].userPosts;
  const curPostIdx = usersPosts.indexOf(postId);
  const prevPostId = usersPosts[curPostIdx - 1];
  const nextPostId = usersPosts[curPostIdx + 1];
  

  return {
    post: state.entities.posts.posts[postId],
    userId,
    postId,
    prevPostId,
    nextPostId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestPost: (postId) => dispatch(requestPost(postId)),
    requestUpdatePost: (post) => dispatch(requestUpdatePost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);

import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/likeActions";
import LikeButton from "./likeButton";

const mapStateToProps = (state, ownProps) => {
  const isCurrentUser = ownProps.liked === null;
  const currentUser = state.session.currentUser.id;
  const curUserLikedPosts = state.entities.likes[currentUser] || [];
  let liked = null;
  if (!isCurrentUser) {
    liked = curUserLikedPosts.includes(ownProps.postId)
    // liked = state.entities.posts.likedPosts.includes(ownProps.postId);
  }
  return {
    liked,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);

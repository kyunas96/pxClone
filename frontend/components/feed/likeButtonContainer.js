import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/likeActions";
import LikeButton from "./likeButton";

const mapStateToProps = (state, ownProps) => {
  const liked = state.entities.posts.likedPosts.includes(ownProps.postId);
  return {
    liked,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);

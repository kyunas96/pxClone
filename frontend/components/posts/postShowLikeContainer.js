import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/likeActions";
import PostShowLike from "./postShowLike";

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  const currentUserLikes = state.entities.likes[currentUserId] || [];
  return {
    liked: currentUserLikes.includes(ownProps.postId),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShowLike);

import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/likeActions";
import LikeButton from "./likeButton";

const mapStateToProps = (state, ownProps) => {
  return {
    liked: state.entities.likedPosts.has(ownProps.postId)
  }
}

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);
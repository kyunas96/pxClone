import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/likeActions";
import LikeButton from "./likeButton";

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId))
})

export default connect(null, mapDispatchToProps)(LikeButton);
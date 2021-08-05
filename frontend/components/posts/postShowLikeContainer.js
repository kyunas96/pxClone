import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/likeActions";
import PostShowLike from "./postShowLike";

const mapStateToProps = (state, ownProps) => ({
    liked: state.entities.posts.likedPosts.includes(ownProps.postId)
});

const mapDispatchToProps = (dispatch) => ({
  addLike: (postId) => dispatch(addLike(postId)),
  removeLike: (postId) => dispatch(removeLike(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShowLike);

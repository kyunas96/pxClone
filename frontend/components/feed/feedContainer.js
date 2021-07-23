import { connect } from "react-redux";
import Feed from "./feed";
import { requestUsersFeed } from "../../actions/postActions";

const mapStateToProps = (state) => {
  console.log("feedContinaer", state)
  return {
    userId: state.session.currentUser.id,
    posts: state.entities.posts,
  };
};

const mapDispatchToProps = (dispatch) => ({
  likePost: (postId) => dispatch(likePost(postId)),
  getFeedItems: (userId) => dispatch(requestUsersFeed(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);

// when on the backend, a like will be created by grabbing the currentUser's id
// and binding it the id of the post to create a new Like

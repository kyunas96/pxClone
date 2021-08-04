import { connect } from "react-redux";
import ProfileFeed from "./profile_feed";

const mapStateToProps = (state, ownProps) => {
  let isCurrentUser =
    state.session.currentUser.id === parseInt(ownProps.userId) ? true : false;
  return {
    isCurrentUser,
    userId: ownProps.userId,
    posts: state.ui.profilePosts,
    likedPosts: state.entities.likedPosts,
  };
};

export default connect(mapStateToProps)(ProfileFeed);

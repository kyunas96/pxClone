import { connect } from "react-redux";
import ProfileFeed from "./profile_feed";
import { getProfilePosts } from "../../actions/profileActions";

const mapStateToProps = (state, ownProps) => {
  let currentUser =
    state.session.currentUser.id === parseInt(ownProps.userId) ? true : false;
  return {
    currentUser,
    userId: ownProps.userId,
    posts: state.ui.profilePosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProfilePosts: (userId) => dispatch(getProfilePosts(userId)),
  };
};

export default connect(mapStateToProps)(ProfileFeed);

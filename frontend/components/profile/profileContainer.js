import { connect } from "react-redux";
import Profile from "./profile";
import { getProfile, getProfilePosts } from "../../actions/profileActions";
import { fetchLikedPosts } from "../../actions/likeActions";

const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId
})

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (userId) => dispatch(getProfile(userId)),
  fetchProfilePosts: (userId) => dispatch(getProfilePosts(userId)),
  fetchLikedPosts: () => dispatch(fetchLikedPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
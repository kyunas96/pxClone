import { connect } from "react-redux";
import Profile from "./profile";
import { getProfile } from "../../actions/profileActions";
import * as FollowActions from "../../actions/followActions";

// determine follow status here, this will allow the component to respond to
// changes in follow status as they occur
const mapStateToProps = (state, ownProps) => {
  console.log("state", state.ui.profile)
  return{
    profile: state.ui.profile,
    userId: ownProps.match.params.userId,
  }
};

//dispatch both follow and unfollow dispatch actions and toggle which one
// is the action to call based on the follow status

const mapDispatchToProps = (dispatch) => ({
  fetchProfile: (userId) => dispatch(getProfile(userId)),
  toggleFollow: (userId) => dispatch(toggleFollow(userId, userProfileId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

//what is the best way to check if a user is following another?
//the uiReducer must have a profileReducer that deals with checking to see if
//user associated with the currently displayed profile is followed by the current
//user

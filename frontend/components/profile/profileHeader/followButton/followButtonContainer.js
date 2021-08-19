import { connect } from "react-redux";
import FollowButton from "./follow_button";
import { addFollow, removeFollow } from "../../../../actions/followActions";

const mapStateToProps = (state, ownProps) => {
  const following = state.entities.users.followedUsers.includes(
    state.ui.currentProfileId
  );
  return {
    following,
    profileId: state.ui.currentProfileId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFollow: (userId) => dispatch(getFollowStatus(userId)),
    addFollow: (profileId) => dispatch(addFollow(profileId)),
    removeFollow: (profileId) => dispatch(removeFollow(profileId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);
import { connect } from 'react-redux';
import FollowButton from './follow_button';


const mapStateToProps = (state, ownProps) => {
  return {
    profileId: state.ui.profile.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchFollow: (userId) => dispatch(getFollowStatus(userId)),
    toggleFollow: (following, userId) => dispatch(toggleFollow(following, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)
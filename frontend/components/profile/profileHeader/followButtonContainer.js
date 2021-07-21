import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { toggleFollow } from '../../../actions/followActions';


const mapStateToProps = (state, ownProps) => {
  return {
    following: state.ui.profile.following,
    profileId: state.ui.profile.userId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleFollow: (following, userId) => dispatch(toggleFollow(following, userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowButton)
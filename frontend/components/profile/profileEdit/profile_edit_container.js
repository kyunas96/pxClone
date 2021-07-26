import { connect } from 'react-redux';
import ProfileEdit from './profile_edit';
import { getProfile, updateProfile } from '../../../actions/profileActions';

const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.currentUser.id,
    profile: state.ui.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserProfile: (userId) => dispatch(getProfile(userId)),
    updateUserProfile: (userId, data) => updateProfile(userId, data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
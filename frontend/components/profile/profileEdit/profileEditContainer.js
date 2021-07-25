import { connect } from 'react-redux';
import { updateProfile, getProfile } from '../../../actions/profileActions';
import ProfileEditForm from './profileEditForm';


const mapStateToProps = (state, ownProps) => {
  return {
    userId: state.session.currentUser.id,
    profile: state.ui.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProfile: (userId) => dispatch(getProfile(userId)),
    updateProfile: (profile) => dispatch(updateProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm)
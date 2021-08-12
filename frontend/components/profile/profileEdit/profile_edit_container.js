import { connect } from 'react-redux';
import ProfileEdit from './profileEdit';
import { requestUser, updateUser } from '../../../actions/userActions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users.users[state.session.currentUser.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestUser: (userId) => dispatch(requestUser(userId)),
    updateUser: (userId, user) => dispatch(updateUser(userId, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
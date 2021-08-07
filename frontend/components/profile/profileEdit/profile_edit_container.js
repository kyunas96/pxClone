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
    updateUser: (userId, data) => updateUser(userId, data)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
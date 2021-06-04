import { connect } from 'react-redux';
import SessionForm from './session_form';
import { createUser } from '../../actions/userActions';
import { resetSessionErrors } from '../../actions/errorActions';

const mapStateToProps = state => ({
  credentials: {
    username: '',
    email: '',
    password: ''
  },
  formType: 'Signup',
  errors: state.errors.session,
  loggedIn: state.session.loggedIn
})

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(createUser(credentials)),
  reset: () => dispatch(resetSessionErrors())

})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import { connect } from 'react-redux';
import SignUpForm from './session_signup_form';
import { createUser } from '../../actions/userActions';
import { resetSessionErrors } from '../../actions/errorActions';

const mapStateToProps = state => {
  return {
    credentials: {
      username: '',
      email: '',
      password: ''
    },
    errors: state.errors.session,
    loggedIn: state.session.loggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(createUser(credentials)),
  reset: () => dispatch(resetSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
import { connect } from 'react-redux';
import SignUpForm from './sessionSignupForm';
import { createUser } from '../../actions/userActions';
import { requestLogin } from '../../actions/sessionActions';
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
  reset: () => dispatch(resetSessionErrors()),
  demoLogin: () => dispatch(requestLogin({username: 'demoUser', password: 'password'}))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
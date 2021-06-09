import { connect } from 'react-redux';
import { requestLogin } from '../../actions/sessionActions';
import { resetSessionErrors } from '../../actions/errorActions';
import LoginForm from './session_login_form';

const mapStateToProps = state => {
  return {
    credentials: {
      username: '',
      password: ''
    },
    errors: state.errors.session,
    loggedIn: state.session.loggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(requestLogin(credentials)),
  reset: () => dispatch(resetSessionErrors()),
  demoLogin: () => dispatch(requestLogin({ username: 'demoUser', password: 'password' }))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
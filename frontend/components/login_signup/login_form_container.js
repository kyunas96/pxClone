import { connect } from 'react-redux';
import { requestLogin } from '../../actions/sessionActions';
import { resetSessionErrors } from '../../actions/errorActions';
import LoginForm from './session_login_form';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    credentials: {
      username: '',
      password: ''
    },
    errors: state.errors.session,
    loggedIn: state.session.loggedIn,
    history: ownProps.history
  }
}

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(requestLogin(credentials)),
  reset: () => dispatch(resetSessionErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
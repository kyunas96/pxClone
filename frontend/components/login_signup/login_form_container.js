import { connect } from 'react-redux';
import SessionForm from './session_form';
import { requestLogin } from '../../actions/sessionActions';
import { resetSessionErrors } from '../../actions/errorActions';

const mapStateToProps = state => {
  // console.log(ownProps);
  return {
    credentials: {
      username: '',
      password: ''
    },
    formType: 'Login',
    errors: state.errors.session,
    loggedIn: state.session.loggedIn
  }
}

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(requestLogin(credentials)),
  reset: () => dispatch(resetSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
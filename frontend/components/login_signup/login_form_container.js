import { connect } from 'react-redux';
import SessionForm from './session_form';
import { requestLogin } from '../../actions/sessionActions';

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
  action: credentials => dispatch(requestLogin(credentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
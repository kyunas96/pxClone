import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  credentials: {
    username: '',
    password: ''
  },
  formType: 'Login'
})

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(loginUser(credentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
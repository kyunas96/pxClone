import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = state => ({
  credentials: {
    username: '',
    email: '',
    password: ''
  },
  formType: 'Signup'
})

const mapDispatchToProps = dispatch => ({
  action: credentials => dispatch(createUser(credentials))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
  currentUser: state.session.currentUser,
  errors: state.session.errors
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionUserModal);
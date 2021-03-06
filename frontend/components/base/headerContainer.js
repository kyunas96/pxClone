import { connect } from 'react-redux'
import Header from './header';
import { requestLogout } from '../../actions/sessionActions'

const mapStateToProps = state => ({
  loggedIn: state.session.loggedIn,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = dispatch => ({
  requestLogout: () => dispatch(requestLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
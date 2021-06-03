import React from 'react';
import { connect } from 'react-redux'
import Header from './header';
import { isEmpty } from '../../util/Util';
import { requestLogout, requestLogin } from '../../actions/sessionActions'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  // console.log(isEmpty(state.session));
  let currentUser = {};
  let loggedIn = false;

  if (!isEmpty(state.session)){
    loggedIn = true;
    currentUser.id = state.session.id;
    currentUser.userName = state.session.username;
  }

  return {
    loggedIn: loggedIn,
    currentUser: currentUser
  };
}

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(requestLogin(credentials)),
  logout: () => dispatch(requestLogout())
})



export default connect(mapStateToProps, null)(Header);
import React from 'react';
import { connect } from 'react-redux'
import Header from './header';
import { isEmpty } from '../../util/Util';

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  console.log(isEmpty(state.session));
  let currentUser = {};

  if (!isEmpty(state.session)){
    currentUser.currentUserId = state.session.id;
    currentUser.currentUserName = state.session.username;
  }

  return {currentUser};
}



export default connect(mapStateToProps, null)(Header);
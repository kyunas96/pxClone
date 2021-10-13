import React from 'react';
import UserInfo from './userInfo';
import LoginSignupContainer from './loginSignup';
import { Link } from 'react-router-dom';
import Logo from './logo';


function Header(props) {

  let innerContent;
  let logoLink;

  if (props.loggedIn) {
    logoLink="/feed";
    innerContent = <UserInfo currentUser={props.currentUser} logout={props.requestLogout} />
  } else {
    logoLink="/";
    innerContent = <LoginSignupContainer />
  }


  return (
    <div className='header'>
      <div className='splash-logo'>
        <Link to={logoLink} className='logo-link svg'>
          <Logo />
        </Link>
      </div>
      {innerContent}
    </div>
  )
}

export default Header;


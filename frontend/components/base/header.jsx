import React from 'react';
import UserInfo from './userInfo';
import LoginSignupContainer from './loginSignup';
import { Link } from 'react-router-dom';
import Logo from './logo';


function Header(props) {

  let innerContent;

  if (props.loggedIn) {
    innerContent = (null);
    innerContent = <UserInfo currentUser={props.currentUser} logout={props.requestLogout} />
  } else {
    innerContent = <LoginSignupContainer />
  }


  return (
    <div className='header'>
      <div className='splash-logo'>
        <Link to='/' className='logo-link svg'>
          <Logo />
        </Link>
      </div>
      {innerContent}
    </div>
  )
}

export default Header;


import React from 'react';
import UserInfo from './userInfo';
import Logo from './logo';
import LoginSignupContainer from './loginSignup';
import { Link } from 'react-router-dom';


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
      {/* <h1>What the fuck</h1> */}
        <Link to='/' className=''>
          <Logo />
        </Link>
      </div>
      {innerContent}
    </div>
  )
}

export default Header;


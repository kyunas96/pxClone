import React from 'react';
import { isEmpty } from '../../util/Util';
import LoginSignup from './loginSignup';
import UserInfo from './userInfo';

const Header = props => {
  console.log(props);
  return (
    <div className='header'>
      <h1>499px</h1>

      {/* <UserInfo user={props.currentUser} logout={props.logout} /> */}
    </div>
  )
}

export default Header;

{/* <LoginSignup /> : 
        <UserInfo user={props.currentUser} action={props.logout} /> */}
import React from 'react';
import { isEmpty } from '../../util/Util';

const Header = props => (
    <div className='header'>
      <h1>499px</h1>
      {
        isEmpty(props.currentUser) ? 
        <LoginSignup /> : 
        <UserInfo user={props.user}/>
      }
    </div>
)

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';

const LoginSignup = props => (

  <div className='login-signup'>
    <Link to='/login'>Login</Link>
    <Link className='signup-link' to='/signup'>Sign up</Link>
  </div>
)

export default LoginSignup;
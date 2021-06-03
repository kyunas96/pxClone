import React from 'react';
import { Link } from 'react-router-dom';

const LoginSignup = props => (

  <div className='login-signup'>
    <Link to='/login'>Login</Link>
    <Link to='/signup'>Signup</Link>
  </div>
)

export default LoginSignup;
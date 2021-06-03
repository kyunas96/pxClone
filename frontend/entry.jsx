import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import * as SessionAPI from './util/SessionAPI';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  console.log("hello");
  window.requestLogin = SessionAPI.requestLogin;
  window.requestLogout = SessionAPI.requestLogout;

  // ReactDOM.render(<Root />, root);
})
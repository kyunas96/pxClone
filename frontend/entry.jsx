import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  console.log("hello");

  ReactDOM.render(<Root />, root);
})
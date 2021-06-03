import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import * as SessionAPI from './util/SessionAPI';
import configureStore from './store/store';
import rootReducer from './reducers/rootReducer';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.requestLogin = SessionAPI.requestLogin;
  window.requestLogout = SessionAPI.requestLogout;

  ReactDOM.render(<Root store={store}/>, root);
})
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import rootReducer from './reducers/rootReducer';
import { requestLogin }  from './actions/sessionActions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  let creds = {username: "kevin", password: "password"}
  window.requestLogin = requestLogin(creds);
  // console.log(store);

  ReactDOM.render(<Root store={store}/>, root);
})
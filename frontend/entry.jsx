import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import rootReducer from './reducers/rootReducer';
import { getProfile } from './util/ProfileAPI';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.getProfile = getProfile;

  ReactDOM.render(<Root store={store}/>, root);
})
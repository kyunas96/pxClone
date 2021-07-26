import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import * as PostAPI from './util/PostAPI';
import { requestPost } from './actions/postActions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.PostAPI = PostAPI;
  window.requestPost = requestPost;

  ReactDOM.render(<Root store={store}/>, root);
})
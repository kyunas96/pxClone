import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import configureStore from './store/store';
import * as PostAPI from './util/PostAPI';
import { requestAllPosts, requestPost } from './actions/postActions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.dispatch = store.dispatch;
  window.PostAPI = PostAPI;
  window.requestAllPosts = requestAllPosts;
  window.requestPost = requestPost;

  ReactDOM.render(<Root store={store}/>, root);
})
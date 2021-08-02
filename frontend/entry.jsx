import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import fetchLocalState from './store/fetchLocalState';
import { store } from "./store/store";
import * as PostAPI from "./util/PostAPI";
import { requestPost } from "./actions/postActions";
import { SESSION_LOGIN } from "./actions/sessionActions";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const user = fetchLocalState();
  // store.dispatch({type: SESSION_LOGIN, user})
  window.store = store;
  window.dispatch = store.dispatch;
  // window.PostAPI = PostAPI;
  // window.requestPost = requestPost;

  ReactDOM.render(<Root store={store} />, root);
});

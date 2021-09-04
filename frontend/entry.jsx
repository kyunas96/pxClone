import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import fetchLocalState from './store/fetchLocalState';
import { store } from "./store/store";
import * as PostAPI from "./util/PostAPI";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const user = fetchLocalState();
  window.store = store;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store} />, root);
});

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

  ReactDOM.render(<Root store={store} />, root);
});

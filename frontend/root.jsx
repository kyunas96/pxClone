import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";
import AppContainer from "./appContainer";
import { persistor } from "./store/store";

const Root = ({ store }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </PersistGate>
  </Provider>
);

export default Root;

import { createStore, applyMiddleware } from 'redux';
import persistedReducer from '../reducers/rootReducer';
import { persistStore } from "redux-persist";
import thunk from 'redux-thunk';

const middlewares = [thunk];

// const configureStore = () => (
//   createStore(RootReducer, applyMiddleware(thunk))
// )


if (process.env.NODE_ENV !== "production") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };

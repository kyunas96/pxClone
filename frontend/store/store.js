import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/rootReducer';
import fetchLocalState from './fetchLocalState';
import thunk from 'redux-thunk';

const configureStore = () => (
  createStore(RootReducer, fetchLocalState(), applyMiddleware(thunk))
)

export default configureStore;

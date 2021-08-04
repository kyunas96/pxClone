import { combineReducers } from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import entitiesReducer from './entitiesReducer';
import errorsReducer from './errorsReducer';
import sessionReducer from './sessionReducer';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["entities", "session", "ui"],
};

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;

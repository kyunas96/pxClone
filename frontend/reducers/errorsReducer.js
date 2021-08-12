import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessionErrorsReducer';
import postErrorsReducer from './postErrorsReducer';
import UserErrorsReducer from './userErrorsReducer';



const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  posts: postErrorsReducer,
  users: UserErrorsReducer
})

export default errorsReducer;
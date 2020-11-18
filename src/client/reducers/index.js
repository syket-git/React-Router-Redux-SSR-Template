import { combineReducers } from 'redux';
import userReducers from './userReducers';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer'; 
export default combineReducers({
  users: userReducers,
  auth: authReducer,
  admins: adminsReducer
});

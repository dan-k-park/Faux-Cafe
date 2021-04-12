import { combineReducers } from 'redux';
import authReducer from './authReducer';
import menuReducer from './menuReducer';

// whatever keys being passed into this object represent the keys that exist inside of the state object
// auth piece of state is being manufactured by the authReducer
export default combineReducers({
  auth: authReducer,
  menu: menuReducer
})
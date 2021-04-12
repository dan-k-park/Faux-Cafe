// Action creator file
import axios from 'axios'; // used to make ajax requests
import { FETCH_USER, FETCH_MENU } from './types';


// Redux thunk inspects the value returned by this action creator
// If redux thunk sees a function being returned, it will call it and pass in the dispatch function as an argument
// wait until promise is resolved, then once we have a response we dispatch an action
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchMenu = () => async dispatch => {
  const res = await axios.get('/api/orders');
  console.log(res)
  dispatch({ type: FETCH_MENU, payload: res.data });
}

export const submitOrder = (values, history) => async dispatch => {
  const res = await axios.post('/api/orders', values);

  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data })
}

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  
  // Reuse fetch user since we'll get back the same user model that has been updated with the new credits
  dispatch({ type: FETCH_USER, payload: res.data });
};
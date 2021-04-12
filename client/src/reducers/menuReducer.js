import { FETCH_MENU } from '../actions/types'

// use default empty array for menu items
export default function(state = [], action) {
  switch(action.type) {
    case FETCH_MENU:
      return action.payload || false;
    default: 
      return state;
  }
}
// ************************************ IMPORT ACTION TYPES ************************************
import {HANDLE_CHANGE} from '../actions/loginActions.js';
import {store} from '../store/store.js';


// ************************************ ESTABLISH STATE ************************************
const _initialState = {
  username: null,
  input: null
}

// EXPORT LOGIN REDUCER
export function loginReducer(state = _initialState, action) {
    switch(action.type) {
      case 'HANDLE_CHANGE':
        let updatedState = Object.assign({}, state);
        updatedState.input = action.data;
        return (
          updatedState
        )
      default:
        return state;
  }
}


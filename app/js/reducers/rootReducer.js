// ************************************ IMPORT NODE MODULES ************************************
import {combineReducers} from 'redux';

// ************************************ IMPORT STORE ************************************
import {store} from '../store/store.js'

// ************************************ IMPORT REDUCERS ************************************
import {loginReducer} from './loginReducer.js';

// ************************************ COMBINE REDUCERS ************************************
export const rootReducer = combineReducers({
  loginReducer
})
// IMPORT REQUIRED MODULE DEPENDENCIES
import {createStore} from 'redux';

// // IMPORT ROOT REDUCER
// import {rootReducer} from './reducers/rootReducer.js';

// // IMPORT REDUCER FROM LOGIN REDUCER FILE
// import loginReducer from '../reducers/loginReducer.js';

// IMPORT REDUCER FROM ALIAS: when using alias you still need to export the module, 
// alias only makes it easier to reference the filename without the entire path
import {rootReducer} from '../reducers/rootReducer';


// CREATES STORE THAT ACCEPTS ROOT REDUCER
export const store = createStore(rootReducer);


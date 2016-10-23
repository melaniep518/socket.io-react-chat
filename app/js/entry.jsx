// IMPORT REQUIRED MODULE DEPENDENCIES
import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// IMPORT COMPONENTS
import {Chat} from './components/Chat.jsx';
import {Login} from './components/login.jsx';

// IMPORT STORE
import {store} from './store/store.js';

// IMPORT CONTAINER
import LoginContainer from './components/loginContainer.js';

// ********************************** PARENT APP COMPONENT **********************************
const App = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        <LoginContainer/>
      </Provider>
    )
  }
})


// // ********************************** RENDERS CHAT APP **********************************
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('chat')
  )
})
// ************************************ IMPORT MODULE DEPENDENCIES ************************************
import React from 'react';
import io from 'socket.io-client';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.css';

// ************************************ IMPORT SOCKET NAMESPACE ************************************
import {socket} from './Chat.jsx';

// ************************************ IMPORT STORE ************************************
import {store} from '../store/store.js';

// ************************************ IMPORT ACTIONS ************************************
import {handleChange, getUser} from '../actions/loginActions.js';


// ************************************ LOGIN COMPONENT ************************************
export const Login = React.createClass({
// ***** Emits an event to the socket to store the username as a property of the socket
  getUser: function(e) {
    // let username = this.props.input
    e.preventDefault();
    console.log(that.props.input);
    socket.emit('new user', )
  },

// ***** Form to enter username-- make a form, give input a value and onChange dispatch an action to set the state to input value
  render: function() {
    console.log(this.props);
    return (
      <div>
        <form onSubmit={this.getUser}>
          <input onChange={store.dispatch.bind(this, handleChange(event))} value={this.props.input} placeholder="Enter a username" />
          <input name="login" type="submit" value="Login"/>
        </form>
      </div>
    ) 
  }
})



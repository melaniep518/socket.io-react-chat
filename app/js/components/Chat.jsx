// IMPORT MODULE DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom'; 
import io from 'socket.io-client';

// IMPORT COMPONENTS
import {Login} from './login.jsx';

// CREATE SOCKET NAMESPACE
const socket = io('http://localhost:3000');

// CHAT COMPONENT
const Chat = React.createClass({
  getInitialState: function() {
    return ({
      messages: [],
      socket: socket,
      // user: null
    })
  },

  componentDidMount: function() {
    let that = this;
    this.state.socket.on('recieve-message', function(msg) {
      console.log(msg);
      that.setState({
        messages: that.state.messages.concat(msg)
      })
      console.log(that.state.messages);  
    });
  },

  sumbitMessage: function() {
    let body = document.getElementById('message').value;
    let message = {
      body: body,
      // user: this.state.user || 'guest'
    }
    this.state.socket.emit('new-message', message);
    // console.log(message);
    document.getElementById('message').value = "";
  },

  render: function() {
  let that = this; 
  let messages = this.state.messages.map(function(msg, i) {
    return (
      <li key={'msg_' + i}><strong>{msg.user + ': '}</strong><span>{msg.body}</span></li>
    )
  });

    return (
      <div>
        <ul>
         {messages} 
        </ul>
        <input id="message" type="text"/>
        <button onClick={that.sumbitMessage}>Send Message</button>
        <Login/>
      </div>
    )
  }
});

// EXPORT MODULES
export {socket, Chat};

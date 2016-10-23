// REQUIRE NECESSARY PACKAGES
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const users = [];
const connections = [];

// On client(socket) connection:
io.sockets.on('connection', function(socket) {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

// On socket disconnect:
  socket.on('disconnect', function(data) {
    connections.splice(connections.indexOf(socket), 1);
    users.splice(users.indexOf(socket.username), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
    console.log('USERS:', users);
  });

// New username entered
  socket.on('new-user', function(username) {
    // Add new username as a property of that socket connection
    socket.username = username;
    // Push into users array the new username so that there will be a log of all users currently in the chat
    users.push(socket.username);
    console.log('NEW USER:', socket.username);
    console.log('USERS:', users);
  })

// Send message
  socket.on('new-message', function(msg) {
    io.emit('recieve-message', msg)
  });
}); 

// Run the server
server.listen(process.env.PORT || 3000);
console.log('Server running at localhost:3000');


// Create an index  route
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');  
});

// Create a route to bundle.js
app.get('/js/bundle.js', function(req, res) {
  res.sendFile(__dirname + '/js/bundle.js')
});


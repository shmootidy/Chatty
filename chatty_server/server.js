const express = require('express');
const SocketServer = require('ws').Server;

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

const uuid4 = require('uuid/v4'); // v4 is random, general (I think)

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('message', (message) => {
    const newMessage = JSON.parse(message);
    console.log(newMessage);
    console.log(`User ${newMessage.username} said ${newMessage.content}`);
  })

  ws.on('close', () => console.log('Client disconnected'));
});
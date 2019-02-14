const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws'); // this is here purely so the conditional statement for posting new messages works

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

const uuid4 = require('uuid/v4'); // v4 is random, general (I think)

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    message = JSON.parse(message);
    message.id = uuid4();

    switch(message.type) {

      case "postMessage":
        const newMessage = message;
        newMessage.type = "incomingMessage";
        console.log(`User ${newMessage.username} said ${newMessage.content}`);
        wss.broadcast(JSON.stringify(newMessage));
        break;

      case "postNotification":
        const notification = message;
        notification.type = "incomingNotification";
        wss.broadcast(JSON.stringify(notification));
        break;
    }
  });

  ws.on('close', () => console.log('Client disconnected'));
});






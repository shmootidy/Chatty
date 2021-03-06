const express = require('express');
const SocketServer = require('ws').Server;
const WebSocket = require('ws'); // this is here purely so the conditional statement for posting new messages works

const PORT = 3001;

const server = express()
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({ server });

const uuid4 = require('uuid/v4'); // v4 is random, general (I think)

const colorArray = ['#A62639', '#360568', '#700548', '#5B2A86'];

wss.broadcast = function broadcast(data) {
  wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
      client.send(data);
    }
  });
};

wss.on('connection', (ws) => {
  console.log('Client connected');
  let n = Math.floor(Math.random() * 4);
  const userColor = {
    type: "userColor",
    color: colorArray[n]
  };
  ws.send(JSON.stringify(userColor));

  const userCount = {
    type: "userCount",
    count: wss.clients.size
  };
  wss.broadcast(JSON.stringify(userCount));

  const logOnLogOff = {
    type: "logOnLogOff",
    count: wss.clients.size
  };
  const firstClient = Array.from(wss.clients)[0];
  firstClient.send(JSON.stringify(logOnLogOff));

  ws.on('message', (message) => {
    message = JSON.parse(message);
    message.id = uuid4();

    switch(message.type) {

      case 'postMessage':
        const newMessage = message;
        newMessage.type = 'incomingMessage';
        console.log(`User ${newMessage.username} said ${newMessage.content}`);
        wss.broadcast(JSON.stringify(newMessage));
        break;

      case 'postNotification':
        const notification = message;
        notification.type = 'incomingNotification';
        wss.broadcast(JSON.stringify(notification));
        break;
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
      if (wss.clients.size){
        const logOnLogOff = {
          type: "logOnLogOff",
          count: wss.clients.size
        };
        const clientsArray = Array.from(wss.clients);
        const lastClient = clientsArray[clientsArray.length - 1];
        lastClient.send(JSON.stringify(logOnLogOff));

        const userCount = {
          type: "userCount",
          count: wss.clients.size
        };
        wss.broadcast(JSON.stringify(userCount));
      }
    });
});






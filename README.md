# Chatty

A real-time chat API built using Websocket and React.

## To Install
  1. Fork and clone this repo
  2. Install necessary dependencies:
     1. in root directory `npm i --save`
     2. in chatty_server directory `npm i --save`
     * *(Both the app server and the websocket server have their own dependencies)*
  3. Start both servers:
     1. in root directory `npm start`
     2. in chatty_server directory `node server.js`
     * *(You will need two Terminal windows open to run the two servers)*
  4. Go to [localhost://3000](localhost://3000) and get Chatty!

## Features

### Different User Colors
Users assigned a color upon logging in. This color is rendered in the styling of the page and the usernames posted on the message board. Each user's color is represented consistently across different sockets.

### Image Support
Input a valid image url (ending in `.png`, `.gif`, or `.jpeg`) and the image will be displayed on the message board.

### Notifications
Users are notified under these circumstances:
  - When a new user logs on
  - When a user logs off
  - When a user changes their name

### Display Number of Users
Users can see how many other users are logged in in the navbar.

## Dependencies
*(See package.json files for full list of dependencies.)*

### Client-side:
  - Babel
  - Sass
  - Webpack
  - React / ReactDOM

### Server-side:
  - Express
  - Websocket

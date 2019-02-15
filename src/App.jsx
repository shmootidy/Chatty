import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const Nav = (props) => {

  const userString = props.userCount > 1 ? (" users") : (" user");

  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
      <span className="userCount">{props.userCount + userString + " online"}</span>
    </nav>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      userCount: 0,
      currentUser: {name: ''},
      userColor: '',
      messages: []
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleNewUsername = this.handleNewUsername.bind(this);
  }

  handleNewMessage(newMessage) {
    this.socket.send(JSON.stringify(newMessage));
  }

  handleNewUsername(newUsername) {
    const oldName = this.state.currentUser.name ? (this.state.currentUser.name) : 'Anonymous';
    const notification = {
      type: 'postNotification',
      content: `${oldName} has changed their name to ${newUsername}`
    };
    newUsername = {name: newUsername}
    this.setState({ currentUser: newUsername });
    this.socket.send(JSON.stringify(notification));
  }

  componentDidMount() {
    this.socket.onopen = (data) => {
      console.log('Connected to server.');
    }
    console.log('componentDidMount <App />');

    this.socket.onmessage = (message) => {
      message = JSON.parse(message.data);

      switch(message.type) {

        case 'userColor':
          let userColor = message.color;
          this.setState({ userColor });
          console.log(this.state);
          break;

        case 'logOnLogOff':
          let userCount = message.count;
          const status = this.state.userCount > userCount ? ('left'):('joined');
          const notification = {
            type: 'postNotification',
            content: `A user has ${status} the chat.`
          };
          this.socket.send(JSON.stringify(notification));
          break;

        case 'userCount':
          userCount = message.count;
          this.setState({ userCount });
          break;

        case 'incomingMessage':
        case 'incomingNotification':
          const newMessages = [...this.state.messages, message];
          this.setState({ messages: newMessages });
          break;
      }
    }

  }

  render() {
    return (
      <div>
        <Nav userCount={this.state.userCount} />
        <MessageList messages={this.state.messages} color={this.state.messages.color} />
        <ChatBar
          username={this.state.currentUser.name}
          color={this.state.userColor}
          addNewMessage={this.handleNewMessage}
          changeUsername={this.handleNewUsername} />
      </div>
    );
  }
}
export default App;


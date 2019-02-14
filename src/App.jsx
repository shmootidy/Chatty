import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

const Nav = () => {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">Chatty</a>
    </nav>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket('ws://localhost:3001');
    this.state = {
      currentUser: {name: ''},
      messages: []
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.handleNewUsername = this.handleNewUsername.bind(this);
  }

  handleNewMessage(newMessage) {
    this.socket.send(JSON.stringify(newMessage));
  }

  handleNewUsername(newUsername) {
    const oldName = this.state.currentUser.name ? (this.state.currentUser.name) : "Anonymous";
    const notification = {
      type: 'postNotification',
      content: `${oldName} has changed their name to ${newUsername}`
    };
    newUsername = {name: newUsername}
    this.setState({ currentUser: newUsername });
    this.socket.send(JSON.stringify(notification));
  }

  componentDidMount() {
    this.socket.onopen = () => {
      console.log('Connected to server.');
    }
    console.log('componentDidMount <App />');

    this.socket.onmessage = (message) => {
      message = JSON.parse(message.data);
      const newMessages = [...this.state.messages, message];
      this.setState({ messages: newMessages });
    }

  }

  render() {
    return (
      <div>
        <Nav />
        <MessageList messages={this.state.messages} />
        <ChatBar
          username={this.state.currentUser.name}
          addNewMessage={this.handleNewMessage}
          changeUsername={this.handleNewUsername} />
      </div>
    );
  }
}
export default App;


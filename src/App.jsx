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
      currentUser: {name: "Bob"},
      messages: []
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage(newMessage) {
    this.socket.send(JSON.stringify(newMessage));
  }

  componentDidMount() {
    this.socket.onopen = () => {
      console.log('Connected to server.');
    }
    console.log("componentDidMount <App />");
  }


  render() {
    return (
      <div>
        <Nav />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} addNewMessage={this.handleNewMessage} />
      </div>
    );
  }
}
export default App;


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
    this.state = {
      currentUser: {name: "Bob"},
      messages: [
        {
          username: "Bob",
          content: "Has anyone seen my marbles?",
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
        }
      ]
    }
  };

  render() {
    return (
      <div>
        <Nav />
        <MessageList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;


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
          id: "caw"
        },
        {
          username: "Anonymous",
          content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
          id: "woof"
        }
      ]
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage(newMessage) {
    console.log('fromApp', newMessage);
    return <div>yes</div>
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      const newMessage = {
        id: 3, username: "Michelle", content: "Hello there!"
      };
      const messages = this.state.messages.concat(newMessage);
      this.setState({messages: messages});
    }, 3000);
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


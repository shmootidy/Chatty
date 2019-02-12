import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import Message from './Message.jsx';

const Nav = () => {
  return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
    )
}

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Message />
        <ChatBar />
      </div>
    );
  }
}
export default App;


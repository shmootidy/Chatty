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
  render() {
    return (
      <div>
        <Nav />
        <MessageList />
        <ChatBar />
      </div>
    );
  }
}
export default App;


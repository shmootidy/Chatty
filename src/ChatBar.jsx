import React, {Component} from 'react';

class ChatBar extends Component {
  onSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      username: e.target.elements.username.value,
      content: e.target.elements.newMessage.value,
    };
    this.props.addNewMessage(newMessage);
    e.target.elements.newMessage.value = "";
  }

  render() {
    return (
      <footer className="chatbar">
        <form onSubmit={this.onSubmit}>
          <input className="chatbar-username" defaultValue={this.props.currentUser.name} name="username" />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" name="newMessage" />
          <input type="submit" />
        </form>
      </footer>
    );
  }
}

export default ChatBar;
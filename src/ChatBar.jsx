import React, {Component} from 'react';

class ChatBar extends Component {

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newUsername = e.target.value;
      this.props.changeUsername(newUsername);
      e.target.value = newUsername;
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      username: this.props.username,
      content: e.target.elements.newMessage.value,
    };
    this.props.addNewMessage(newMessage);
    e.target.elements.newMessage.value = "";
  }

  render() {
    return (
      <footer className="chatbar">
        <form onSubmit={this.onSubmit}>
          <input
            className="chatbar-username"
            defaultValue={this.props.username ? ( this.props.username ) : ( "Anonymous" )}
            name="username"
            onKeyPress={this.onKeyPress} />
          <input
            className="chatbar-message"
            placeholder="Type a message and hit ENTER"
            name="newMessage" />
          <input type="submit" />
        </form>
      </footer>
    );
  }
}

export default ChatBar;
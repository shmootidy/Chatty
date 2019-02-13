import React, {Component} from 'react';

class ChatBar extends Component {

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newUsername = e.target.value;
      console.log(newUsername);
    }
  }

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
          <input
            className="chatbar-username"
            defaultValue={this.props.currentUser.name ? ( this.props.currentUser.name ) : ( "Anonymous" )}
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
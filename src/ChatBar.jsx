import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    const text = e.target.value;
    this.setState({ input: text });
  }

  onKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newUsername = e.target.value;
      this.props.changeUsername(newUsername);
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      username: this.props.username,
      content: this.state.input,
    };
    this.props.addNewMessage(newMessage);
    this.setState({ input: '' });
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
            name="newMessage"
            value={this.state.input}
            onChange={this.onChange} />
          <input type="submit" />
        </form>
      </footer>
    );
  }
}

export default ChatBar;
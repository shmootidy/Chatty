import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      username: this.props.username ? ( this.props.username ) : ( 'Anonymous' ),
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    const text = e.target.value;
    this.setState({ input: text });
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      switch(e.target.name) {

        case 'username':
          const newUsername = e.target.value;
          this.setState({ username: newUsername });
          this.props.changeUsername(newUsername);
          break;

        case 'newMessage':
          const newMessage = {
            type: 'postMessage',
            username: this.state.username,
            content: this.state.input,
            color: this.props.color,
          };
          this.props.addNewMessage(newMessage);
          this.setState({ input: '' });
          break;

        default:
          throw new Error('Something went funky with your submission.');
      }
    }
  }

  render() {
    return (
      <footer className="chatbar">
        <input
          className="chatbar-username"
          defaultValue={this.state.username}
          name="username"
          onKeyPress={this.onKeyPress} />
        <input
          className="chatbar-message"
          placeholder="Type a message and hit ENTER"
          name="newMessage"
          value={this.state.input}
          onChange={this.onChange}
          onKeyPress={this.onKeyPress} />
      </footer>
    );
  }
}

export default ChatBar;
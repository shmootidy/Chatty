import React, {Component} from 'react';
import Message from './Message.jsx';

export default class MessageList extends Component {
  render() {

  const messages = this.props.messages.map((message) => {
    return (
      <div className="message">
        <span className="message-username">{message.username}</span>
        <span className="message-content">{message.content}</span>
      </div>
    )
  });

  return (
      <main className="messages">
        {messages}
      </main>
    )
  }
}


 /*

 */
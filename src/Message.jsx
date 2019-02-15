import React, {Component} from 'react';

export default class Message extends Component {
  render(){
    switch(this.props.message.type) {
      case 'incomingMessage':
        return (
          <div className="message">
            <span className="message-username" style={{color: this.props.message.color}} >{this.props.message.username}</span>
            <span className="message-content">{this.props.message.content}</span>
          </div>
        );
      case 'incomingNotification':
      return (
        <div className="notification">
          <span className="notification-content">{this.props.message.content}</span>
        </div>
      );
    }
  }
}

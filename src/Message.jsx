import React, {Component} from 'react';

export default class Message extends Component {
  render(){

    const postedUsername = <span className="message-username" style={{color: this.props.message.color}} >{this.props.message.username}</span>


    switch(this.props.message.type) {

      case 'incomingMessage':
        return (
          <div className="message">
            {postedUsername}
            <span className="message-content">{this.props.message.content}</span>
          </div>
        );

      case 'incomingNotification':
      return (
        <div className="notification">
          <span className="notification-content">{this.props.message.content}</span>
        </div>
      );

      case 'incomingImage':
        return (
          <div className="image">
            {postedUsername}
            <img src={this.props.message.content} style={{maxHeight: "60vw"}} />
          </div>
        );
    }
  }
}

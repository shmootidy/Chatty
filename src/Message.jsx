import React, {Component} from 'react'

const Message = (props) => {
  const postedUsername = <span className="message-username" style={{color: props.message.color}} >{props.message.username}</span>
  switch(props.message.type) {

    case 'incomingMessage':
      return (
        <div className="message">
          {postedUsername}
          <span className="message-content">{props.message.content}</span>
        </div>
      )

    case 'incomingNotification':
      return (
        <div className="notification">
          <span className="notification-content">{props.message.content}</span>
        </div>
      )

    case 'incomingImage':
      return (
        <div className="image">
          {postedUsername}
          <img src={props.message.content} style={{maxWidth: "60vw"}} />
        </div>
      )
  }

}

export default Message
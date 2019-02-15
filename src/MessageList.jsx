import React, {Component} from 'react'
import Message from './Message.jsx'

const MessageList = (props) => {
  const messages = props.messages.map((message) => {
    return <Message message={message} key={message.id} />
  })

  return (
    <main className="messages">
      {messages}
    </main>
  )

}

export default MessageList
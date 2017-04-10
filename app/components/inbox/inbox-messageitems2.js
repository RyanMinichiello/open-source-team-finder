import React from 'react';
import InboxHeader from './inbox-header';
import MessageThread from './inbox-messagethread';
import MessageReceive from './inbox-messagereceive';
import MessageSent from './inbox-messagesent';
import MessageEntry from './inbox-messageentry';

export default class MessageItems2 extends React.Component {
  render() {
    return (
      <div className= "col-md-7">

        <InboxHeader team="John Smith">
        </InboxHeader>

        <div className= "message-zone">

          <MessageThread>

            <MessageSent message="Hi! I'm interested in your project idea.">
            </MessageSent>

            <MessageReceive author="John Smith"
              message = "Sure, what would you like to know?">
            </MessageReceive>

          </MessageThread>

        </div>

        <MessageEntry>
        </MessageEntry>
      </div>
    )
  }
}

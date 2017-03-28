import React from 'react';
import InboxHeader from './inbox-header';
import MessageThread from './inbox-messagethread';
import MessageReceive from './inbox-messagereceive';
import MessageSent from './inbox-messagesent';
import MessageEntry from './inbox-messageentry';

export default class MessageItems3 extends React.Component {
  render() {
    return (
      <div className= "col-md-7">

        <InboxHeader team="Lynda Doe">
        </InboxHeader>

        <div className= "message-zone">

          <MessageThread>

            <MessageSent message="Hi Lynda, I'm Jane working with the Okra Project. We are very impressed by your skillset and are hoping you'll join our team!">
            </MessageSent>
            
          </MessageThread>

        </div>

        <MessageEntry>
        </MessageEntry>
      </div>
    )
  }
}

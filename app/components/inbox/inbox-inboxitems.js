import React from 'react';
import InboxThread from './inbox-inboxthread';
import Inbox from './inbox-inbox';


export default class InboxItems extends React.Component {

  constructor(props) {
      super(props);
  }

  generateInbox(chats){
    if(chats){
      return chats.map(this.createInbox);
    }
  }

  createInbox(chat){
    return <Inbox key = {chat} chatId = {chat}></Inbox>
  }


  render() {
    return (
      <div>
      <div className= "col-md-3">
        <div className= "navbar-default inbox-head">
          Inbox
        </div>
        <div className= "inbox-zone">

          <InboxThread>

            {this.generateInbox(this.props.chatData)}


          </InboxThread>

        </div>
        </div>
      </div>


    )
  }
}

import React from 'react';
import InboxThread from './inbox-inboxthread';
import Inbox from './inbox-inbox';
import {getChatData} from '../../server';
import {getChatArrData} from '../../server';
import {getInboxData} from '../../server';


export default class InboxItems extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        contents:[],
        chats:[],
        messages:[]
      };
  }

  refresh(){
    getInboxData(1, (inboxData)=>{
      this.setState({contents:inboxData});
      this.settingChat(inboxData.chats);
    });
  }

  componentWillMount(){
   this.refresh();
  }

  generateInbox(chats){
    if(chats){
      return chats.map(this.createInbox);
    }
  }

  settingChat(ch){
    if(ch){
      getChatArrData(ch, (cb)=>{
        this.setState({chats: cb});
      });

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

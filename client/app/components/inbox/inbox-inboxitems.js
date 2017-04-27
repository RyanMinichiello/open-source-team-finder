import React from 'react';
import InboxThread from './inbox-inboxthread';
import Inbox from './inbox-inbox';
import {getChatData} from '../../server';
import {getChatListItems} from '../../server';
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

  generateInbox(){
      return (this.createInbox());
      //return chats.map(this.createInbox);

  }

  settingChat(){

      getChatListItems(1, (cb)=>{
        this.setState({chats: cb});
      });


  }




  createInbox(){
    return <Inbox key = {1} chatId = {1} ></Inbox>
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

            {this.generateInbox()}


          </InboxThread>

        </div>
        </div>
      </div>


    )
  }
}

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
        messages:[],
        pid: "000000000000000000000001"
      };
  }

  refresh(){
    getInboxData(this.state.pid, (inboxData)=>{
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

      getChatListItems(this.state.pid, (cb)=>{
        this.setState({chats: cb});
      });


  }




  createInbox(){
    return <Inbox key = {this.state.pid} chatId = {this.state.pid} ></Inbox>
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

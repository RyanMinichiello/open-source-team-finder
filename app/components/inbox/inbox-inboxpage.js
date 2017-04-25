import React from 'react';
import MessageItems from './inbox-messageitems.js';
import InboxItems from './inbox-inboxitems.js';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';
import {getInboxData} from '../../server.js';
import {getChatArrData} from '../../server.js';
import Inbox from './inbox-inbox.js';


export default class InboxPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[],
      chats:[]
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
   this.settingChat();
  }



  settingChat(ch){
    if(ch){
      getChatArrData(ch, (cb)=>{
        this.setState({chats: cb});
      });

    }
  }




  render() {

    return (
    <div>

      <Navbar
          name = {this.state.name}
          ></Navbar>
        <Sidebar
            projects = {this.state.dummyproj}
        ></Sidebar>
        <div className = "col-md-2">
        </div>

      <InboxItems   chatData = {this.state.contents.chats}  />



      <MessageItems chatArr = {this.state.contents.chats} />

    </div>

    )
  }
}

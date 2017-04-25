import React from 'react';
import MessageItems from './inbox-messageitems.js';
import InboxItems from './inbox-inboxitems.js';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';
import {getInboxData} from '../../server.js';
import {getChatArrData} from '../../server.js';
import Inbox from './inbox-inbox.js';
import {getChatData} from '../../server.js';
import {getMessageArrData} from '../../server.js';


export default class InboxPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[],
      chats:[],
      activeChatId:"",
      messages:[]
    };
  }

  refresh(){
    getInboxData(1, (inboxData)=>{
      console.log(inboxData);
      this.setState({contents:inboxData});
      console.log(this.state.contents);
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

/*handleClickChat(clickEvent, activeId){
    console.log("entered into handleclickchat method!");
    clickEvent.preventDefault();
    if(clickEvent.button === 0){
      var selectChat = this.state.chats[activeId];
      var callbackFunction = (newColor, newCurr) =>{
        selectChat.color = "read";
        selectChat.curr = "message-current panel panel-default";
        this.state.chats[activeId] = selectChat;
        this.setState({chat: this.state.chats[activeId]});
      };
      getChatData(selectChat, callbackFunction);
      this.setState({activeChatId: activeId});
      getMessageArrData(this.state.activeChatId, (cb)=>{
        this.setState({messages:cb});
      });
    }
  }*/




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

      <InboxItems   chatData = {this.state.contents.chats}   />



      <MessageItems chatArr = {this.state.contents.chats} />

    </div>

    )
  }
}

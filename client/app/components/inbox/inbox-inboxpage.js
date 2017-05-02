import React from 'react';
import MessageItems from './inbox-messageitems.js';
import InboxItems from './inbox-inboxitems.js';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';
import {getInboxData} from '../../server.js';
import {getChatListItems} from '../../server.js';
import Inbox from './inbox-inbox.js';
import {getChatData} from '../../server.js';
import {getMessageListItems} from '../../server.js';


export default class InboxPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[],
      chats:[],
      activeChatId:"",
      messages:[],
      pid:"000000000000000000000001"
    };
  }

  refresh(){
    getInboxData(this.state.pid, (inboxData)=>{
      this.setState({contents:inboxData});
      getChatData(this.state.pid, (cb) =>{
        this.setState({chats: cb});
        this.settingMessages;
      })
    });
  }

  componentWillMount(){
   this.refresh();
   this.settingChat();
   this.settingMessages();
  }



  settingChat(ch){
    if(ch){
      getChatData(ch, (cb)=>{
        this.setState({chats: cb});
      });

    }
  }

  settingMessages(){

      getMessageListItems(this.state.pid, this.state.pid, (cb) =>{
        this.setState({messages: cb});
      });

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



      <MessageItems chatArr = {this.state.contents.chats} messArr = {this.state.messages}/>

    </div>

    )
  }
}

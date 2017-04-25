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


  handleClickChat(clickEvent, id){
    console.log("enter handle click chat !! WHAT IS ID: ? "+ id);
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
    var callbackFunction = (newColor, newCurr) =>{
      console.log(this.state.chats.id.color);
      this.setState({chats:{id: {color:"read"}}});
      this.setState({chats:{id:{curr: "message-current panel panel-default"}}});
    };
     getChatData(this.props.chatId,callbackFunction);

   }

  }

  createInbox(chat){
    return <a href="#" onClick={(e) => this.handleClickChat(e, chat)}><Inbox key = {chat} chatId = {chat}></Inbox></a>
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

import React from 'react';
import {getChatData} from '../../server.js';
import {handleClickChat} from './inbox-inboxpage.js';
import InboxPage from './inbox-inboxpage.js';


export default class Inbox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[]
    };

  }

  refresh(){
    getChatData(this.props.chatId, (chatData)=>{
      this.setState(chatData);
    });
  }

  componentWillMount(){
   this.refresh();
  }

  clickingChat(clickEvent, activeId){
    console.log("this is clickingChat method");
    console.log("ID FROM CLICK CHAT: "+this.state._id);
    if(activeId){
        console.log("right before going to handleclickchat method");
        InboxPage.handleClickChat(clickEvent, activeId);
    }
  }




  render() {
    return (
      <div className= {this.state.curr}>
        {console.log("********: "+this.state._id)}
        <a href="#" onClick={(e) => this.clickingChat(e, this.state._id)}>
          <div className= "panel-body">
            <div className= "col-md-10 chat-name">
              <b>{this.state.name}</b>
            </div>
            <div className= "col-md-2">
              <span className={this.state.color}>●</span>
            </div>
          </div>
        </a>

      </div>
    )
  }
}

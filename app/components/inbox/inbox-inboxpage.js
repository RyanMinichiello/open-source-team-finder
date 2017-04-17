import React from 'react';
import MessageItems from './inbox-messageitems.js';
import InboxItems from './inbox-inboxitems.js';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';
import {getInboxData} from '../../server.js';

export default class InboxPage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[]
    };
  }

  refresh(){
    getInboxData(1, (inboxData)=>{
      this.setState(inboxData);
    });
  }

  componentWillMount(){
   this.refresh();
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
      <InboxItems   chatData = {this.state.chats} />

      <MessageItems chatArr = {this.state.chats}/>

    </div>

    )
  }
}

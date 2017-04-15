import React from 'react';
import MessageItems from './inbox-messageitems';
import InboxItems from './inbox-inboxitems';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';

export default class InboxPage extends React.Component {
<<<<<<< Updated upstream
=======

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

>>>>>>> Stashed changes
  render() {
    
    return (
    <div>

      <Navbar
          self_name = "Jane"
          ></Navbar>
        <Sidebar
            first_active = "Okra Team"
            second_active = "Peach Team"
            third_active = "Garbanzo Bean Team"
            fourth_active = "Apple Team"
            ></Sidebar>

        <div className = "col-md-2">
        </div>
      <InboxItems  var = {1} chatData = {this.state.chats} />

      <MessageItems />

    </div>

    )
  }
}

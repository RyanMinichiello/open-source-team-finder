import React from 'react';
import MessageItems2 from './inbox-messageitems2';
import InboxItems2 from './inbox-inboxitems2';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';

export default class InboxPage2 extends React.Component {
  render() {
    return (
    <div>

      <Navbar
          self_name = "Jane"
          ></Navbar>
        <Sidebar
            first_active = "Project 1"
            second_active = "Project 2"
            third_active = "Project 3"
            fourth_active = "Project 4"
            ></Sidebar>

        <div className = "col-md-2">
        </div>
      <InboxItems2 />

      <MessageItems2 />

    </div>

    )
  }
}

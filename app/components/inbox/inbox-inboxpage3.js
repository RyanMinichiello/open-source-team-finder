import React from 'react';
import MessageItems3 from './inbox-messageitems3';
import InboxItems3 from './inbox-inboxitems3';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';

export default class InboxPage3 extends React.Component {
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
      <InboxItems3 />

      <MessageItems3 />

    </div>

    )
  }
}

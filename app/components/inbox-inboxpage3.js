import React from 'react';
import MessageItems3 from './inbox-messageitems3';
import InboxItems3 from './inbox-inboxitems3';
import Profile_Sidebar from './profile_page/profile_sidebar';
import Navbar from './navbar';

export default class InboxPage3 extends React.Component {
  render() {
    return (
    <div>

      <Navbar />
      <Profile_Sidebar />

        <div className = "col-md-2">
        </div>
      <InboxItems3 />

      <MessageItems3 />

    </div>

    )
  }
}

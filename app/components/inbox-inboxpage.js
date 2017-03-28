import React from 'react';
import MessageItems from './inbox-messageitems';
import InboxItems from './inbox-inboxitems';
import Profile_Sidebar from './profile_page/profile_sidebar';
import Navbar from './navbar';

export default class InboxPage extends React.Component {
  render() {
    return (
    <div>

      <Navbar />
      <Profile_Sidebar />

        <div className = "col-md-2">
        </div>
      <InboxItems />

      <MessageItems />

    </div>

    )
  }
}

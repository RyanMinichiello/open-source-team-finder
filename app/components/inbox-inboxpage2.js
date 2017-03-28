import React from 'react';
import MessageItems2 from './inbox-messageitems2';
import InboxItems2 from './inbox-inboxitems2';
import Profile_Sidebar from './profile_page/profile_sidebar';
import Navbar from './navbar';

export default class InboxPage2 extends React.Component {
  render() {
    return (
    <div>

      <Navbar />
      <Profile_Sidebar />

        <div className = "col-md-2">
        </div>
      <InboxItems2 />

      <MessageItems2 />

    </div>

    )
  }
}

import React from 'react';
import MessageItems2 from './inbox-messageitems2';
import InboxItems2 from './inbox-inboxitems2';
import Profile_Sidebar from './profile_page/profile_sidebar';
import Profile_Nav from './profile_page/profile_nav';

export default class InboxPage2 extends React.Component {
  render() {
    return (
    <div>

      <Profile_Nav
          self_name = "Jane"
          ></Profile_Nav>
        <Profile_Sidebar
            first_active = "Project 1"
            second_active = "Project 2"
            third_active = "Project 3"
            fourth_active = "Project 4"
            ></Profile_Sidebar>

        <div className = "col-md-2">
        </div>
      <InboxItems2 />

      <MessageItems2 />

    </div>

    )
  }
}

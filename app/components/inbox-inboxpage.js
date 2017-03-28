import React from 'react';
import MessageItems from './inbox-messageitems';
import InboxItems from './inbox-inboxitems';
import Profile_Sidebar from './profile_page/profile_sidebar';
import Profile_Nav from './profile_page/profile_nav';

export default class InboxPage extends React.Component {
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
      <InboxItems />

      <MessageItems />

    </div>

    )
  }
}

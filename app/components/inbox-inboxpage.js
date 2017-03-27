import React from 'react';
import MessageItems from './inbox-messageitems';
import InboxItems from './inbox-inboxitems';

export default class InboxPage extends React.Component {
  render() {
    return (
    <div>

      <InboxItems />

      <MessageItems />

    </div>

    )
  }
}

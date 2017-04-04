import React from 'react';

export default class InboxHeader extends React.Component {
  render() {
    return (
      <div className= "navbar-default message-head">
        {this.props.team}
      </div>
    )
  }
}

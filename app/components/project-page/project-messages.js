import React from 'react';
import MessageItem from './project-message-item'

export default class ProjectMessages extends React.Component {
  render(){
    return(
      <div className="project-message col-md-4">
        <h3>Messages</h3>
        <MessageItem />
      </div>

    )
  }
}

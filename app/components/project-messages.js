import React from 'react';

export default class ProjectMessages extends React.Component {
  render(){
    return(
      <div className="project-message col-md-4">
        <h3>Messages</h3>
        <div className="message-item">Today we are meeting to discuss the future of the team project<br/><br/><div className="message-date">2/23/2017</div></div>
        <div className="message-item">Hello Team! Wonderful day put today. <br/><div className="message-date">2/23/2017</div></div>
        <div className="message-item">No one laughed at my hilarious joke in the meeting today...You're all fired! <br/><div className="message-date">2/23/2017</div></div>
      </div>

    )
  }
}

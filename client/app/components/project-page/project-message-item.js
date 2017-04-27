import React from 'react';

export default class MessageItem extends React.Component {
  render(){
    return(
      <div>
        <div className="message-item">{this.props.data}<br/><div className="message-date">2/23/2017</div></div>
      </div>

    )
  }
}

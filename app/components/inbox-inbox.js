import React from 'react';

export default class Inbox extends React.Component {
  render() {
    return (
      <div className= {this.props.curr}>

        <a href="#">
          <div className= "panel-body">
            <div className= "col-md-10 chat-name">
              {this.props.icon}
              <b>{this.props.author}</b>
            </div>
            <div className= "col-md-2">
              <span className={this.props.read}>●</span>
            </div>
          </div>
        </a>

      </div>
    )
  }
}

import React from 'react';

export default class MessageSent extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-7">
        </div>
        <div className="col-md-5">
          <div className= "panel panel-default message-talk">
            <div className="panel-body">
              <p>{this.props.message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

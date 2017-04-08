import React from 'react';

export default class MessageReceive extends React.Component {
  render() {
    return (
        <div className="row">
          <div className="col-md-5">
            <div className= "panel panel-default message-talk" >
              <div className="panel-body">
                <span className="glyphicon glyphicon-user"></span>
                <b>{this.props.author}</b>
                <p>{this.props.message}</p>
                <div className={this.props.fileclass}>
                  <div className={this.props.panel}>
                    <div className={this.props.body}>
                    {this.props.file}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
          </div>
        </div>
    )
  }
}

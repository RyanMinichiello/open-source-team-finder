import React from 'react';

export default class MessageEntry extends React.Component {
  render() {
    return (
      <div className= "panel panel-default message-text">
        <div className="panel-body">
          <div className="media">
            <div className="media-body">
              <div className= "col-md-10">
                <textarea className="form-control" rows="2" placeholder="Send messages..">
                </textarea>
              </div>
              <div className= "col-md-2">
                <button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-paperclip"></span>
                </button>
                <button type="button" className="btn btn-default">
                  <span className="glyphicon glyphicon-send"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

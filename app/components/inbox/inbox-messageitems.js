import React from 'react';
import InboxHeader from './inbox-header';
import MessageThread from './inbox-messagethread';
import MessageReceive from './inbox-messagereceive';
import MessageSent from './inbox-messagesent';
import MessageEntry from './inbox-messageentry';
import {getMessageData} from '../../server';

export default class MessageItems extends React.Component {

constructor(props){
  super(props);
  this.state = {
    contents:[]
  };
}

refresh(){
  getMessageData(1, (messageData) =>{
    this.setState(messageData);
  })
}

componentWillMount(){
  this.refresh();
}

  render() {
    return (
      <div className= "col-md-7">

        <InboxHeader team="Okra Team">
        </InboxHeader>

        <div className= "message-zone">

          <MessageThread>
            <MessageReceive author="Joshua Tranfaglia"
              message = "Hey guys, what should our main feed page look like?">
            </MessageReceive>

            <MessageSent message="Can someone send a pic of our design?">
            </MessageSent>

            <MessageReceive author="Ryan Minichiello"
              fileclass = "row file-attach"
              panel= "panel panel-default file-panel"
              body="panel-body"
              file={
                <div>
                <b>Okra-main.jpg</b>
                <p><span className="glyphicon glyphicon-picture jpg-glyph"></span></p>
                <p><a href="#">
                  <id className="change-color">save</id>
                </a> | <a href="#">
                  <id className="change-color">open</id>
                </a></p>
                </div>
              }>

            </MessageReceive>

            <MessageReceive author="Nicholas Achin"
              message="Here is the pdf file of the project plan"
              fileclass="row file-attach"
              panel="panel panel-default file-panel"
              body="panel-body"
              file={
                <div>
                <b>Okra-project_plan.pdf</b>
                <p><span className="glyphicon glyphicon-file jpg-glyph"></span></p>
                <p><a href="#">
                  <id className="change-color">save</id>
                </a> | <a href="#">
                  <id className="change-color">open</id>
                </a></p>
                </div>
              }>
              </MessageReceive>

          </MessageThread>

        </div>

        <MessageEntry>
        </MessageEntry>
      </div>
    )
  }
}

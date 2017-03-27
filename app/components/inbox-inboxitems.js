import React from 'react';
import InboxThread from './inbox-inboxthread';
import Inbox from './inbox-inbox';


export default class InboxItems extends React.Component {
  render() {
    return (
      <div>
      <div className= "col-md-3">
        <div className= "navbar-default inbox-head">
          Inbox
        </div>
        <div className= "inbox-zone">

          <InboxThread>
            <Inbox  author="Okra Team" icon=
              {
                <div>
                <span className= "glyphicon glyphicon-user"></span>
                <span className= "glyphicon glyphicon-user"></span>
                </div>
              }
              curr= "message-current panel panel-default"
              read = "read">

            </Inbox>




            <Inbox author="John Smith"  curr= "message-preview panel panel-default" read = "unread">
            </Inbox>



            <Inbox author="Mango Team" icon=
            {
              <div>
              <span className= "glyphicon glyphicon-user"></span>
              <span className= "glyphicon glyphicon-user"></span>
              </div>
            }
            curr= "message-preview panel panel-default"
            read = "unread">
            </Inbox>



            <Inbox author="Apple Team" icon=
            {
              <div>
              <span className= "glyphicon glyphicon-user"></span>
              <span className= "glyphicon glyphicon-user"></span>
              </div>
            }
            curr= "message-preview panel panel-default"
            read = "read">
            </Inbox>



            <Inbox author="Anna Hall" curr= "message-preview panel panel-default" read = "read">
            </Inbox>


            <Inbox author="Kiwi Team" icon=
              {
                <div>
                <span className= "glyphicon glyphicon-user"></span>
                <span className= "glyphicon glyphicon-user"></span>
                </div>
              }
              curr= "message-preview panel panel-default"
              read = "read">
            </Inbox>
          </InboxThread>

        </div>
        </div>
      </div>


    )
  }
}

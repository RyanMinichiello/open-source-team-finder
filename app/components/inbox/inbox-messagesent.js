import React from 'react';
import {getMessageData} from '../../server';

export default class MessageSent extends React.Component {

  constructor(props){
    super(props);
    this.state={
      contents:[]
    };
  }

  refresh(){
    getMessageData(this.props.messageId, (messageData) =>{
      this.setState(messageData);
    });
  }

  componentWillMount(){
    this.refresh();
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-7">
        </div>
        <div className="col-md-5">
          <div className= "panel panel-default message-talk">
            <div className="panel-body">
              <p>{this.state.contents}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

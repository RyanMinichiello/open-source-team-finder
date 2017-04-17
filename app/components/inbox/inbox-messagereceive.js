import React from 'react';
import {getMessageData} from '../../server';
import {getUserInfo} from '../../server';

export default class MessageReceive extends React.Component {

  constructor(props){
    super(props);
    this.state={
      contents:[],
      name:""
    };

  }

  refresh(){
    getMessageData(this.props.messageId, (messageData) =>{
      this.setState({contents:messageData});
    });

  }

  componentDidMount(){
    this.refresh();
  }

  generateName(author){
    if(author){
      return this.createName(author);
    }
  }

  createName(author){
    getUserInfo(author,(n) =>{
      this.setState({name: n.name});
    });
  }

  render() {
    return (
        <div className="row">
          <div className="col-md-5">
            <div className= "panel panel-default message-talk" >
              <div className="panel-body">
                <span className="glyphicon glyphicon-user"></span>
                {this.generateName(this.state.contents.author)}
                <b>{this.state.name}</b>
                <p>{this.state.contents.contents}</p>

              </div>
            </div>
          </div>
          <div className="col-md-7">
          </div>
        </div>
    )
  }
}

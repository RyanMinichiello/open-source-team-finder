import React from 'react';
import {getChatData} from '../../server';


export default class Inbox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      contents:[]
    };

  }

  refresh(){
    getChatData(this.props.chatId, (chatData)=>{
      this.setState(chatData);
    });
  }

  componentWillMount(){
   this.refresh();
  }





  render() {
    return (
      <div className= {this.state.curr}>


          <div className= "panel-body">
            <div className= "col-md-10 chat-name">
              <b>{this.state.name}</b>
            </div>
            <div className= "col-md-2">
              <span className={this.state.color}>●</span>
            </div>
          </div>


      </div>
    )
  }
}

import React from 'react';
import {readChat} from '../../server';
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

  handleClickChat(clickEvent){
    clickEvent.preventDefault();
    if (clickEvent.button === 0) {
    var callbackFunction = (newColor) =>{
      this.setState({color: "read"});
    };
     readChat(this.props.chatId,callbackFunction);
     
   }
  }



  render() {
    return (
      <div className= {this.state.curr}>

        <a href="#" onClick={(e) => this.handleClickChat(e)}>
          <div className= "panel-body">
            <div className= "col-md-10 chat-name">
              {this.state.icon}
              <b>{this.state.name}</b>
            </div>
            <div className= "col-md-2">
              <span className={this.state.color}>●</span>
            </div>
          </div>
        </a>

      </div>
    )
  }
}

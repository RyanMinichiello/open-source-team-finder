import React from 'react';
import MessageItem from './project-message-item';
import {getProjectUpdates} from '../../server.js'

export default class ProjectMessages extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        contents : []
      };
   }

   generateMessages(list) {
     if(list){
       console.log(this.state.messages.length);
    }
   }

   createMessage(item){
     return <MessageItem key={item.id} data={item.description}/>;
   }

   refresh() {
     getProjectUpdates("000000000000000000000001", (data) => {
      this.setState({messages : data});
    });

   }

   componentDidMount() {
     this.refresh();
   }

  render(){
    return(
      <div className="project-message col-md-4">
        <h3>Messages</h3>
        {this.generateMessages(this.state.messages)}
      </div>

    )
  }
}

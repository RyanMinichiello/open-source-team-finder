import React from 'react';

export default class MessageEntry extends React.Component {

  constructor(props){
    super(props);
    this.state={
      value:""
    };
  }

  handlePost(e){
    console.log("HANDLEPOST FROM MESSAGE ENTRY");
    e.preventDefault();
    var messageUpdateText = this.state.value.trim();
    if(messageUpdateText !== ""){
      this.props.onPost(messageUpdateText);
    }
  }

  handleChange(e){
    console.log("HANDLECHANGE FROM MESSAGE ENTRY");
    e.preventDefault();
    this.setState({value: e.target.value});
  }


  render() {
    return (
      <div className= "panel panel-default message-text">
        <div className="panel-body">
          <div className="media">
            <div className="media-body">
              <div className= "col-md-10">
                <textarea className="form-control" rows="2" placeholder="Send messages.." value={this.state.value} onChange={(e) => this.handleChange(e)}>
                </textarea>
              </div>
              <div className= "col-md-2">

                <button type="button" className="btn btn-default" onClick={(e)=> this.handlePost(e)}>
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

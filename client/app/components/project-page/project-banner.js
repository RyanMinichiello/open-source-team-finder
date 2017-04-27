import React from 'react';

export default class ProjectBanner extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
        contents : [],
        applied  : 0
      };
   }
  onApply(){
    this.setState({applied : 1});
  }

  getButtons(){
    //change to if they are an admin have edit button show up
    var button;
    if(this.state.applied == 0){
      button =<button className="header-button" onClick={(e) => this.onApply(e)} >Apply</button>
    }else {
      button =<button className="header-button"> Applied <span className="glyphicon glyphicon-ok"></span></button>
    }
    return (<div className="header-buttons">
      {button}
    </div>);
  }
  render(){
    return(
        <div className="project-header row">

          <img className="profile-banner" src="img/okra.jpg"/>
          {this.getButtons()}

      </div>

    )
  }
}

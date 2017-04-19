import React from 'react';

export default class ProjectBanner extends React.Component {

  onApply(){
    console.log("Hello");
  }

  getButtons(){
    //change to if they are an admin have edit button show up
    return (<div className="header-buttons">
      <button className="header-button" onClick={(e) => this.onApply(e)} >Apply</button>
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

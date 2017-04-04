import React from 'react';

export default class ProjectBanner extends React.Component {
  render(){
    return(
        <div className="project-header row">

          <img className="banner-image" src="img/okra.jpg"/>

          <div className="header-buttons">
            <button className="header-button">Apply</button>
            <button className="header-button">Follow</button>
          </div>


      </div>

    )
  }
}

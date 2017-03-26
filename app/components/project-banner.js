import React from 'react';

export default class ProjectBanner extends React.Component {
  render(){
    return(
      <div>
        <div className="project-header row">

          <img src="img/okra.jpg"/>

          <div className="header-buttons">
            <button className="header-button">Apply</button>
            <button className="header-button">Follow</button>
          </div>

        </div>

        <div className="project-banner"><h1>Project Okra</h1></div>

      </div>

    )
  }
}

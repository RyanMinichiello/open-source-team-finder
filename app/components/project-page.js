import React from 'react';
import ProjectBanner from './project-banner';
import ProjectDescription from './project-description';
import ProjectMessages from './project-messages';
import ProjectPositions from './project-positions';
import Navbar from './navbar.js';

export default class ProjectPage extends React.Component {
  render(){
    return(
        <div className="project-container row">
          <ProjectBanner />
          <ProjectDescription />
          <ProjectMessages />
          <ProjectPositions />
        </div>
    )
  }
}

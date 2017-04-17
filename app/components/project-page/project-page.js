import React from 'react';
import ProjectBanner from './project-banner';
import ProjectDescription from './project-description';
import ProjectMessages from './project-messages';
import ProjectPositions from './project-positions';
import {getProjectData} from '../../server';
// import Navbar from '../navbar.js';

export default class ProjectPage extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        contents : []
      };
   }

   refresh() {
     getProjectData(1, (projectData) => {
      this.setState(projectData);
    });

   }


   componentDidMount() {
     this.refresh();
   }

  render(){
    return(
        <div className="project-container row">
            <ProjectBanner uid={this.props.uid} pid={this.props.pid}/>
            <div className="project-banner"><h1 className="banner-header">{this.state.identifier}</h1></div>
            <ProjectDescription projectDescription={this.state.description} projectSkillz={this.state.skillz} positionID={this.state.pos}/>
            <ProjectMessages updateID={this.state.updates}/>
            <ProjectPositions positionID={this.state.pos}/>
        </div>
    )
  }
}

import React from 'react';
import ProjectBanner from './project-banner';
import ProjectDescription from './project-description';
import ProjectMessages from './project-messages';
import ProjectPositions from './project-positions';
import Sidebar from '../sidebar.js';
import Navbar from '../navbar.js';
import {getProjectData} from '../../server';

export default class ProjectPage extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        contents : []
      };
   }

   refresh() {
     getProjectData("000000000000000000000001", (projectData) => {
      this.setState(projectData);
    });

   }


   componentDidMount() {
     this.refresh();
   }

  render(){
    return(
        <div>
        <Navbar></Navbar>
            <div className="row"></div>
                <Sidebar
                ></Sidebar>
            <div className = "col-md-2"></div>
        <div className="project-zone col-md-10">
            <ProjectBanner uid={this.props.uid} pid={this.props.pid}/>
            <div className="project-banner"><h1 className="banner-header">{this.state.identifier}</h1></div>
            <ProjectDescription projectDescription={this.state.description} projectSkillz={this.state.skillz} positionID={this.state.pos}/>
            <ProjectMessages updateID={this.state.updates}/>
            <ProjectPositions positionID={this.state.pos}/>
        </div>
    </div>
    )
  }
}

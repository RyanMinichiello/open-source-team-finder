import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import Checkbox from './createproject-checkbox.js';

import CreateProjectTagSection from './createproject-tag-section.js';
import CreateProjectPositionSection from './createproject-position-list.js';

import {createProject} from '../../server.js';


export default class CreateProject extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      projectName : "Orange Team",
      description : "The fun stuff",
      tags : ["Stuff", "Cool"],
      positions : ["Software Engineer"],
      startDate : "",
      endDate : "",
      inProgress : 0,
      pid : 1
    }
  }
  refresh() {

  }


  onClick() {
    console.log("HERE");
    var projectNameText = this.state.projectName.trim();
    var descriptionText = this.state.description.trim();
    var project = {
      "identifier" : "Okra2",
      "id"         : 5,
      "notificationItems": 3,
      "msgs"       : 1,
      "positions"  : [1],
      "description": "Welcome to the show 2.0",
      "skillz"     :["Java", "Social", "Sick Card Tricks 2.0"],
      "startDate" : "2019-11-01",
      "endDate" : "2020-01-01",
      "inProgress" : 0,
      "tags" : ["Java", "Front-end"]
    };
    createProject(1, project.identifier, project.description, project.tags, project.skillz,
       project.startDate, project.endDate, project.inProgress, project._id,
        project.notificationItems, project.msgs, project.positions, () => {
      this.refresh();
    });
    console.log("HERE2");

  }

  render() {
    return (
      <div>

        <Navbar
          self_name = "Jane"
          ></Navbar>

        <div>
          <Sidebar
            first_active = "Project 1"
            second_active = "Project 2"
            third_active = "Project 3"
            fourth_active = "Project 4"
            ></Sidebar>
        </div>


        <div className="col-md-4 leftmain">
          <div id = "create-project-title" className= "attribute-box attribute">Create Project</div>
          <div className= "attribute-box">
            <div className= "attribute">Project Name:</div>
            <input id = "projectName" required/>
          </div>
          <div className= "attribute-box">
            <div className= "attribute">Description:</div>
            <input required/>
          </div>

          <div className ="tag-section">
            <CreateProjectTagSection />
          </div>

          <img id="logo" alt="OSTF Logo" src="img/logo_notext.png" height="auto" width="auto" />
        </div>




        <div className="col-md-4 rightmain">

          <CreateProjectPositionSection />

          <div className = "attribute-box date">
            <div className = "attribute">Start Date:
              <input type="date" />
            </div>
          </div>
          <div className = "attribute-box date">
            <div className = "attribute">End Date:
              <input type="date" />
            </div>
          </div>

          <div className = "progress attribute-box">
            <div>In Progress:
              <form onSubmit={this.handleFormSubmit} id= "progress-checkbox">
                <Checkbox key='inprogress'></Checkbox> </form>
              </div>
            </div>

            <div>
              <button type="button" id="create" className="btn btn-default" onClick={ () => this.onClick()}>
                Create
              </button>
            </div>

          </div>

        </div>

      )
    }
  }

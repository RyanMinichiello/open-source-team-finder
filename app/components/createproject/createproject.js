import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import {Link} from 'react-router';

import Checkbox from './createproject-checkbox.js';

import CreateProjectTagSection from './createproject-tag-section.js';
import CreateProjectPositionSection from './createproject-position-list.js';
import {unixTimeToString} from '../util.js';
import {createProject} from '../../server.js';


export default class CreateProject extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      projectName : "",
      description : "",
      tags : [],
      positions : [],
      startDate : "",
      endDate : "",
      inProgress : 0

    }

    }



    handleClick(e) {
        e.preventDefault();
        var projectNameText = this.state.projectName.trim();
        var descriptionText = this.state.description.trim();


            createProject(1, projectNameText, descriptionText, this.tags, this.positions, this.startDate.value, this.endDate.value, this.inProgress.value, () => {
                this.refresh();
            });
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
          <Link to ={"/project-page"}>
          <button type="button" id="create" className="btn btn-default" onClick={ () => this.handleClick()}>
          Create
          </button>
        </Link>
        </div>

        </div>

      </div>

    )
  }
}

import React from 'react';


import CreateProjectTagSection from './createproject-tag-section.js';
import CreateProjectPositionSection from './createproject-position-list.js';

export default class CreateProject extends React.Component {
  render() {
    return (


      <div>
        <div className="col-md-4 leftmain">
         <div id = "create-project-title" className= "attribute-box attribute">Create Project</div>
         <div className= "attribute-box">
         <div className= "attribute">Project Name:</div>
         <input />
        </div>
        <div className= "attribute-box">
         <div className= "attribute">Description:</div>
         <input />
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
          <div className = "attribute">In Progress:
          <input type="checkbox" id="progress-checkbox"></input>
          </div>
        </div>

          <button type="button" id="create" className="btn btn-default">
          Create
          </button>

        </div>

      </div>
    )
  }
}

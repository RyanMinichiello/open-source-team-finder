import React from 'react';


import CreateProjectTagSection from './createproject-tag-section.js';
import CreateProjectPositionSection from './createproject-position-list.js';

export default class CreateProject extends React.Component {
  render() {
    return (


      <div>
        <nav classname="navbar navbar-default navbar-fixed-top">
           NAVBAR
        </nav>
        <nav classname="navbar navbar-fixed-top navbar-default">

           <div classname="container">

              <div classname="navbar-header">
                 <button type="button" classname="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span classname="sr-only">Toggle navigation</span>
                 <span classname="icon-bar"></span>
                 <span classname="icon-bar"></span>
                 <span classname="icon-bar"></span>
                 </button>

                 <a classname="navbar-brand" href="#">

                    <span><img src="img/logo_notext.png" class = "logo pull-left" /></span>
                 </a>
              </div>

              <div classname="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 <form classname="navbar-form navbar-left" role="search" />

                    <div classname="input-group">
                       <input type="text fb-search" classname="form-control" placeholder="Search OSTF">
                       <span classname="input-group-btn" />
                       <button type="submit" classname="btn btn-default">
                       <span classname="glyphicon glyphicon-search"></span>
                       </button>
                       </span>
                    </div>
                 </form>
                 <div classname="nav navbar-nav navbar-right">

                    <div classname="btn-toolbar pull-right" role="toolbar">
                       <div classname="btn-group" role="group">
                          <button type="button" classname="btn btn-default navbar-btn">
                          <span classname="glyphicon glyphicon-user"></span>
                          Jane
                          </button>
                       </div>
                       <div classname="btn-group" role="group">
                          <button type="button" classname="btn btn-default navbar-btn">
                          <span classname="glyphicon glyphicon-envelope"></span>
                          </button>
                       </div>
                       <div classname="btn-group" role="group">
                          <button type="button" classname="btn btn-default navbar-btn orange-btn">
                          +Create Project
                          </button>
                       </div>
                       <div classname="btn-group" role="group">
                          <div classname="btn-group" role="group">
                             <button type="button" classname="btn btn-default navbar-btn">
                             Sign Out
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

           </div>

        </nav>

        <div classname="col-md-2 side-bar">

           <ul classname="nav nav-pills nav-stacked">
              <li role="presentation">PROJECTS</li>
              <li role="presentation"><a href="#"> Project 1 </a> </li>
              <li role="presentation"><a href="#"> Project 2 </a> </li>
              <li role="presentation"><a href="#"> Project 3 </a> </li>
              <li role="presentation"><a href="#"> Project 4 </a> </li>
              <li role="presentation"><a href="#"><span classname="glyphicon glyphicon-stats"></span>
                 Job Board</a>
              </li>
           </ul>
           <div style="height: 1000px;"></div>
        </div>
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

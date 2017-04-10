import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';

import CreateProjectTagSection from './createproject-tag-section.js';
import CreateProjectPositionSection from './createproject-position-list.js';

export default class CreateProject extends React.Component {
  render() {
    return (


      <div>

        <nav className="navbar navbar-default navbar-fixed-top">
           NAVBAR
        </nav>
        <nav className="navbar navbar-fixed-top navbar-default">

           <div className="container">

              <div className="navbar-header">
                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 </button>

                 <a className="navbar-brand" href="#">

                    <span><img src="img/logo_notext.png" className= "logo pull-left" /></span>
                 </a>
              </div>

              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 <form className="navbar-form navbar-left" role="search" >

                    <div className="input-group">
                       <input type="text fb-search" className="form-control" placeholder="Search OSTF" />
                       <span className="input-group-btn" >
                       <button type="submit" className="btn btn-default">
                       <span className="glyphicon glyphicon-search"></span>
                       </button>
                       </span>
                    </div>
                 </form>
               </div>
                 <div className="nav navbar-nav navbar-right">

                    <div className="btn-toolbar pull-right" role="toolbar">
                       <div className="btn-group" role="group">
                          <button type="button" className="btn btn-default navbar-btn">
                          <span className="glyphicon glyphicon-user"></span>
                          Jane
                          </button>
                       </div>
                       <div className="btn-group" role="group">
                          <button type="button" className="btn btn-default navbar-btn">
                          <span className="glyphicon glyphicon-envelope"></span>
                          </button>
                       </div>
                       <div className="btn-group" role="group">
                          <button type="button" className="btn btn-default navbar-btn orange-btn">
                          +Create Project
                          </button>
                       </div>
                       <div className="btn-group" role="group">
                          <div className="btn-group" role="group">
                             <button type="button" className="btn btn-default navbar-btn">
                             Sign Out
                             </button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>



        </nav>

        <div className="col-md-2 side-bar">

           <ul className="nav nav-pills nav-stacked">
              <li role="presentation">PROJECTS</li>
              <li role="presentation"><a href="#"> Project 1 </a> </li>
              <li role="presentation"><a href="#"> Project 2 </a> </li>
              <li role="presentation"><a href="#"> Project 3 </a> </li>
              <li role="presentation"><a href="#"> Project 4 </a> </li>
              <li role="presentation"><a href="#"><span className="glyphicon glyphicon-stats"></span>
                 Job Board</a>
              </li>
           </ul>
           <div style="height: 1000px;"></div>
        </div>

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

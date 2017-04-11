import React from 'react';
import {getUserInfo, getProjectData} from '../server.js';

export default class Sidebar extends React.Component {

  constructor(props) {
     super(props);
     this.state = {
        contents : []
      };
   }

   refresh() {
     getUserInfo(1, (userData) => {
      this.setState(userData);
    });

   }


   componentDidMount() {
     this.refresh();
   }

   generateProjects() {
     if(this.state.projects){
      return this.state.projects.map(this.getProject);
    }
   }

   getProject(item) {
     var data = getProjectData(item.id);
     return <li role="presentation"> {data.identifier} </li>;
   }

    render() {

        return (
            <div>
            <div className="text-center col-md-2 side-bar">
               <ul className="nav nav-pills nav-stacked">
                 //TODO: Render projects associated with users
                  <li role="presentation">PROJECTS</li>
                  {this.generateProjects()}
                  <li role="presentation"><a href="ostf-job-board.html"><span className="glyphicon glyphicon-stats"></span>
                     Job Board</a>
                  </li>
               </ul>
           </div>
       </div>
        )
    }
}

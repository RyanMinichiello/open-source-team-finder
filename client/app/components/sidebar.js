import React from 'react';
import ProfilePill from './profile-page/profile_pill.js';
import { Link } from 'react-router';
import {getProjectPillData} from '../server.js';
import ResetDatabase from './resetdatabase';

export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents: [],
            pid : "000000000000000000000001",
            projects: []
        };
    }

    genererateProjectItems(){
      if(this.state.projects) {
        return this.state.projects.map(this.createProjectPillItem);
      }
    }

    getProjectList() {
      getProjectPillData(this.state.pid, (project) => {
        console.log("getting proj list");
        console.log(this.state.pid);
        console.log(project);
        this.setState({projects: project});
        }
      );
    }

    createProjectPillItem(item) {
      console.log(item);
      return <ProfilePill key = {item.id} team={item.identifier}/>
    }

    refresh() {
      this.getProjectList(this.state.pid);
    }
    componentDidMount() {
        this.refresh();
    }

    render() {

        return (
            <div>
            <div className="text-center col-md-2 side-bar">
               <ul className="nav nav-pills nav-stacked">
                  <li role="presentation">PROJECTS</li>

                    {this.genererateProjectItems()}

                <Link to="/ostf-job-board">
                  <li className="nav-pills" role="presentation"><span className=" glyphicon glyphicon-stats"></span>
                     Job Board
                  </li>
                </Link>

                <li role="presentation">
                  <ResetDatabase />
                </li>

               </ul>
           </div>
       </div>
        )
    }
}

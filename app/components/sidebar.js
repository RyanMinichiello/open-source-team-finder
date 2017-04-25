import React from 'react';
import ProfilePill from './profile-page/profile_pill.js';
import { Link } from 'react-router';
import {getProjectPillData} from '../server.js'

export default class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents: [],
            pid : 1,
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
        this.setState({projects: project});
        }
      );
    }

  createProjectPillItem(item) {
    return <ProfilePill key = {item._id} team={item.identifier}/>
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
               </ul>
           </div>
       </div>
        )
    }
}

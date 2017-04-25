import React from 'react';
import ProfilePill from './profile_pill.js';
import {getProfileData} from '../../server.js';
import  {getProjectPillData} from '../../server.js';

export default class Profile_Teams extends React.Component {
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
  getProfileData(1, (profileData) => {
    this.setState(profileData);
  });
  this.getProjectList(this.state.pid);
}

componentDidMount() {
  this.refresh();
}



render() {
  return(
    <div>
      <div className="profile-teams col-md-4">
        <h3>Projects</h3>
        <ul className="nav nav-pills nav-stacked">
          {this.genererateProjectItems()}
        </ul>
      </div>
    </div>
  )
}
}

import React from 'react';
import ProfilePill from './profile_pill.js';
import {getProfileData} from '../../server.js';
import {getProjectData} from '../../server.js';
import {Link} from 'react-router';

export default class Profile_Teams extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents: [],
            pid : 1
        };
    }

    generateNames(list) {
        if(list) {
            return list.map(this.getName);
        }
        this.refresh();
    }

    getName(item) {
        var dat = getProjectData(item, (projectData) => {
         this.setState(projectData);
     });
        return dat["identifier"];
    }


    generateTeams(list) {
        if(list) {
            return list.map(this.createTeam);
        }
        this.refresh();
    }
    createTeam(item){

        return<ProfilePill key={item} team = {item}/>
    }
    refresh() {
        getProfileData(1, (profileData) => {
            this.setState(profileData);
        });
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
                 {this.generateTeams(this.props.teams)}
             </ul>
            </div>
        </div>
        )
    }
}

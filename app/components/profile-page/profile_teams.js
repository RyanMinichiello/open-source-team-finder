import React from 'react';
import ProfilePill from 'profile_pill.js';

export default class Profile_Temp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            contents: [],
            pid : 1
        };
    }

    generateTeams(list) {
        if(list) {
            return list.map(this.createTeam);
        }
    }
    createTeam(item){
        return<ProfilePill key={item} team = {item}/>
    }
    refresh() {
        /*TODO*/
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
                 {this.generateTeams(this.props.projects)}
              </ul>
            </div>
        </div>
        )
    }
}

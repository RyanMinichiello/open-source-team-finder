import React from 'react';
import ProfilePill from './profile_pill.js';

export default class Profile_Teams extends React.Component {
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

    }
    componentDidMount() {
        this.refresh();
    }


    render() {
        return(
            <div>
            <div className="profile-teams col-md-4">
<<<<<<< HEAD
              <h3>Projects</h3>
=======
              <h3>Current Projects</h3>
              <ul className="nav nav-pills nav-stacked">
                 <li role="presentation"><a href="#"> {this.props.user_active_project} </a> </li>
              </ul>
              <h3>Previous Projects</h3>
>>>>>>> createprojjs
              <ul className="nav nav-pills nav-stacked">
                 {this.generateTeams(this.props.teams)}
              </ul>
            </div>
        </div>
        )
    }
}

import React from 'react';
import ProfilePill from './profile-page/profile_pill.js'

export default class Sidebar extends React.Component {
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

        return (
            <div>
            <div className="text-center col-md-2 side-bar">
               <ul className="nav nav-pills nav-stacked">
                  <li role="presentation">PROJECTS</li>
<<<<<<< HEAD

                    {this.generateTeams(this.props.projects)}

=======
                  <li role="presentation"><a href="#"> {this.props.first_active} </a> </li>
                  <li role="presentation"><a href="#"> {this.props.second_active} </a> </li>
                  <li role="presentation"><a href="#"> {this.props.third_active} </a> </li>
                  <li role="presentation"><a href="#"> {this.props.fourth_active}</a> </li>
>>>>>>> createprojjs
                  <li role="presentation"><a href="ostf-job-board.html"><span className="glyphicon glyphicon-stats"></span>
                     Job Board</a>
                  </li>
               </ul>
           </div>
       </div>
        )
    }
}

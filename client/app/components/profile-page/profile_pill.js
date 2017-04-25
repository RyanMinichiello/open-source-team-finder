import React from 'react';
import {Link} from 'react-router';

export default class ProfilePill extends React.Component {
  render(){
    return(
        <Link to="project-page">
            <li className ="nav-pills" role="presentation"> {this.props.team}</li>
        </Link>
    )
  }
}

import React from 'react';
import {Link} from 'react-router';

export default class ProfilePill extends React.Component {
  render(){
    return(
        <Link to="project-page">
        <li role="presentation"><a href="#"> {this.props.team} </a> </li>
        </Link>
    )
  }
}

import React from 'react';

export default class ProfilePill extends React.Component {
  render(){
    return(
         <li role="presentation"><a href="#"> {this.props.team} </a> </li>
    )
  }
}

import React from 'react';

export default class ProfileButton extends React.Component {
  render(){
    return(
        <button type="button" className = "btn btn-skill-interest">
            {this.props.skill}
        </button>

    )
  }
}

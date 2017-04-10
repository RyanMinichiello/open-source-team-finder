import React from 'react';

export default class SkillItem extends React.Component {
  render(){
    return(
        <div className="skill-item">
          {this.props.skill}
        </div>

    )
  }
}

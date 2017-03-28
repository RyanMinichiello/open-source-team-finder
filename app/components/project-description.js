import React from 'react';
import MemberItem from './project-member-item.js';
import SkillItem from './project-skill-item.js';

export default class ProjectDescription extends React.Component {
  render(){
    return(
      <div className="project-description col-md-4">

        <h3>Description</h3>
        <div>Blah blah blah blah stuff about the project</div>
        <h3>Skills Needed</h3>
        <SkillItem />
        <br/><br/>
        <h3>Team</h3>
        <MemberItem />

      </div>

    )
  }
}

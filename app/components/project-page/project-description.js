import React from 'react';
import MemberItem from './project-member-item.js';
import SkillItem from './project-skill-item.js';

export default class ProjectDescription extends React.Component {

  generateSkills(list){
    if (list) {
      return list.map(this.createSkill);
    }
  }

  createSkill(item){
    return <SkillItem key={item} skill={item}/>
  }

  render(){
    return(
      <div className="project-description col-md-4">

        <h3>Description</h3>
        <div>{this.props.projectDescription}</div>
        <h3>Skills Needed</h3>
          {this.generateSkills(this.props.projectSkillz)}
        <br/><br/>
        <h3>Team</h3>
        <MemberItem />

      </div>

    )
  }
}

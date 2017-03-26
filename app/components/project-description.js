import React from 'react';

export default class ProjectDescription extends React.Component {
  render(){
    return(
      <div className="project-description col-md-4">
      
        <h3>Description</h3>
        <div>Blah blah blah blah stuff about the project</div>
        <h3>Skills Needed</h3>
        <div className="skill-item">SKillz that killz go here...z </div>
        <div className="skill-item">Java</div>
        <div className="skill-item">Hiding</div>
        <br/><br/>
        <h3>Team</h3>
        <div className="project-member">Nomar Garciaparra: Software Developer</div>
        <div className="project-member">Hideo Nomo: Team Leader</div>
        <div className="project-member">Leonidas: Manager</div>

      </div>

    )
  }
}

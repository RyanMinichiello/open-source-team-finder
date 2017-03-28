import React from 'react';

export default class Profile_About extends React.Component {
    render() {
        return (
            <div>
            <div className="project-description col-md-4">
              <h3>Bio</h3>
              <div>{this.props.about}</div>
              <h3>Contact</h3>
              <div className="skill-item">{this.props.email}
              </div>
              <div className="skill-item">{this.props.contact}
              </div>
            </div>
        </div>
        )
    }
}

import React from 'react';

export default class Profile_Skills extends React.Component {
    render() {
        return (
            <div>
            <div className="project-message col-md-4 mid-col">
              <h3>
                  {this.props.name}
              </h3>
              <h3>Skills</h3>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              {this.props.first_skill}
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              {this.props.second_skill}
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              {this.props.third_skill}
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              {this.props.fourth_skill}
              </button>
              <h3>Interests</h3>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              {this.props.first_interest}
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              {this.props.second_interest}
              </button>

            </div>
        </div>
        )
    }
}

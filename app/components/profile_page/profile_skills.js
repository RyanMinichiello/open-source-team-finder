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
              Agile Development
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              Javascript
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              Scala
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              Node.js
              </button>
              <h3>Interests</h3>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              Clean Energy
              </button>
              <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
              Finance
              </button>

            </div>
        </div>
        )
    }
}

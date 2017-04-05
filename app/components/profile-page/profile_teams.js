import React from 'react';

export default class Profile_Temp extends React.Component {
    render() {
        return(
            <div>
            <div className="project-positions col-md-4">
              <h3>Current Projects</h3>
              <ul className="nav nav-pills nav-stacked">
                 <li role="presentation"><a href="#"> {this.props.user_active_project} </a> </li>
              </ul>
              <h3>Previous Projects</h3>
              <ul className="nav nav-pills nav-stacked">
                 <li role="presentation"><a href="#"> {this.props.user_past_first} </a> </li>
                 <li role="presentation"><a href="#"> {this.props.user_past_second} </a> </li>
              </ul>
            </div>
        </div>
        )
    }
}

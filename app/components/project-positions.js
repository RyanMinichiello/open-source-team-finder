import React from 'react';
import PositionItem from "./project-position-item";

export default class ProjectPositions extends React.Component {
  render(){
    return(
      <div className="project-positions col-md-4">
        <h3>Positions</h3>
        <p>Hello these are the open posiitions for the team as of right now:</p>
        <PositionItem />
      </div>
    )
  }
}

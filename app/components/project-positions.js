import React from 'react';

export default class ProjectPositions extends React.Component {
  render(){
    return(
      <div className="project-positions col-md-4">
        <h3>Positions</h3>
        <p>Hello these are the open posiitions for the team as of right now:
        <div className="position-item">Baker</div>
        <div className="position-item">Banker</div>
        <div className="position-item">Candlestick Maker</div>
        <div className="position-item">Hair Dresser</div>
        <div className="position-item">Tax Accessor</div></p>
      </div>
    )
  }
}

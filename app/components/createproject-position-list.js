import React from 'react';


import CreateProjectSinglePosition from './createproject-single-position.js'
export default class CreateProjectPositionSection extends React.Component {
  render() {
    return (


      <div>

        <div className = "attribute-box" id="positions">
        <div className = "attribute">Positions:</div>
        <CreateProjectSinglePosition />
        <CreateProjectSinglePosition />
        <CreateProjectSinglePosition />
      </div>
        <button type="button" id="add-more-btn" className="btn btn-default">
        Add More...
        </button>

</div>
);
}
}

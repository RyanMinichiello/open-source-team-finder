import React from 'react';

export default class MainFeedFilter extends React.Component {
  render() {
    return (
      <div>
        <div className="row navbar main-feed-header">
          <div className="checkbox">
            <h12> Job Openings <span className="glyphicon glyphicon-paperclip"></span> </h12>
          </div>

          <div className="checkbox">
            <h12> Team Updates <span className="glyphicon glyphicon-eye-open"></span> </h12>

          </div>
        </div>
      </div>
    )
  }
}

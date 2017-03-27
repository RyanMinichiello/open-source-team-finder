import React from 'react';

export default class MainFeed extends React.Component {
  render() {
    return (
      <div className="row main-feed-row">
        <div className="col-md-10 job-feed">
          {React.Children.map(this.props.children, function(child) {
            return (
              <div className="panel panel-default">
                {child}
              </div>
            )
          })}
          <div className="panel panel-default">
            <MainFeedItem/>
          </div>
        </div>
      </div>
    )
  }
}

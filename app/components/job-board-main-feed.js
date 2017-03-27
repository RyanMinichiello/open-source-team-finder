import React from 'react';
import ReactDOM from 'react-dom';
import FilterBar from './filter-bar.js'
import JobBoardPost from './job-board-post.js'

class JobBoardMainFeed extends React.Component {
  render() {
    return (
      <div className="col-md-10 job-feed">
        <FilterBar />
        <div className="job-list">
          <br />
          <JobBoardPost />
          <JobBoardPost />
          <JobBoardPost />
          <JobBoardPost />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <JobBoardMainFeed />,
  document.getElementById('job-board-main-feed')
);

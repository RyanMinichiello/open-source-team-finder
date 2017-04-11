import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import FilterBar from './filter-bar.js'
import JobBoardMainFeed from './job-board-main-feed.js'

export default class JobBoard extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          self_name = "Jane"
          ></Navbar>
          <div>
            <Sidebar
              first_active = "Project 1"
              second_active = "Project 2"
              third_active = "Project 3"
              fourth_active = "Project 4"
              ></Sidebar>
          </div>
          <div className="col-md-10 job-feed">
            <FilterBar />
            <JobBoardMainFeed />
        </div>
      </div>
    );
  }
}

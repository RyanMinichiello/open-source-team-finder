import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import FilterBar from './filter-bar.js'
import JobBoardMainFeed from './job-board-main-feed.js'
import JobBoardPost from './job-board-post'
import JobBoardTagList from './job-board-tag-list'
import JobBoardTagItem from './job-board-tag-item'

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
            <JobBoardMainFeed>
              <JobBoardPost project="PROJECT1" position_title="POSITION1"
                  position_description="Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam eleifend tristique nunc fermentum
                  malesuada. Praesent congue, elit ac tempus laoreet, dolor
                  augue vehicula massa, vitae eleifend sem nunc sit amet
                  diam. Maecenas dignissim suscipit purus id luctus."
                  rankingType="gold-button">
              </JobBoardPost>
                <JobBoardPost project="PROJECT2" position_title="POSITION2"
                  position_description="Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam eleifend tristique nunc fermentum
                  malesuada. Praesent congue, elit ac tempus laoreet, dolor
                  augue vehicula massa, vitae eleifend sem nunc sit amet
                  diam. Maecenas dignissim suscipit purus id luctus."
                  rankingType="silver-button"/>
                <JobBoardPost project="PROJECT3" position_title="POSITION3"
                  position_description="Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam eleifend tristique nunc fermentum
                  malesuada. Praesent congue, elit ac tempus laoreet, dolor
                  augue vehicula massa, vitae eleifend sem nunc sit amet
                  diam. Maecenas dignissim suscipit purus id luctus."
                  rankingType="silver-button"/>
                <JobBoardPost project="PROJECT4" position_title="POSITION4"
                  position_description="Description: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam eleifend tristique nunc fermentum
                  malesuada. Praesent congue, elit ac tempus laoreet, dolor
                  augue vehicula massa, vitae eleifend sem nunc sit amet
                  diam. Maecenas dignissim suscipit purus id luctus."
                  rankingType="bronze-button"/>
            </JobBoardMainFeed>
        </div>
      </div>
    );
  }
}

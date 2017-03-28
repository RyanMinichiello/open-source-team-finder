import React from 'react';
import FilterBar from './filter-bar.js'
import JobBoardPost from './job-board-post.js'

export default class JobBoardMainFeed extends React.Component {
  render() {
    return (
      <div className="col-md-10 job-feed">
        <FilterBar />
        <div className="job-list">
          <br />
          <JobBoardPost project="PROJECT1" position_title="POSITION1"
            position_description="Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Nam eleifend tristique nunc fermentum
                          malesuada. Praesent congue, elit ac tempus laoreet, dolor
                          augue vehicula massa, vitae eleifend sem nunc sit amet
                          diam. Maecenas dignissim suscipit purus id luctus."/>
          <JobBoardPost project="PROJECT2" position_title="POSITION2"
            position_description="Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Nam eleifend tristique nunc fermentum
                          malesuada. Praesent congue, elit ac tempus laoreet, dolor
                          augue vehicula massa, vitae eleifend sem nunc sit amet
                          diam. Maecenas dignissim suscipit purus id luctus."/>
          <JobBoardPost project="PROJECT3" position_title="POSITION3"
            position_description="Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Nam eleifend tristique nunc fermentum
                          malesuada. Praesent congue, elit ac tempus laoreet, dolor
                          augue vehicula massa, vitae eleifend sem nunc sit amet
                          diam. Maecenas dignissim suscipit purus id luctus."/>
          <JobBoardPost project="PROJECT4" position_title="POSITION4"
            position_description="Description: Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Nam eleifend tristique nunc fermentum
                          malesuada. Praesent congue, elit ac tempus laoreet, dolor
                          augue vehicula massa, vitae eleifend sem nunc sit amet
                          diam. Maecenas dignissim suscipit purus id luctus."/>
        </div>
      </div>
    );
  }
}

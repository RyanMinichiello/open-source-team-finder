import React from 'react';
<<<<<<< HEAD
=======
import FilterBar from './filter-bar.js'
import JobBoardPost from './job-board-post.js'
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
>>>>>>> createprojjs

export default class JobBoardMainFeed extends React.Component {
  render() {
    return (
<<<<<<< HEAD
        <ul className="job-list">
          <br />
          {React.Children.map(this.props.children, function(child) {
            return (
              <li className="media">
                {child}
              </li>
            )
          })}
        </ul>
=======
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
    </div>
>>>>>>> createprojjs
    );
  }
}

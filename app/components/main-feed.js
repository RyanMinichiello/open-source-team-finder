import React from 'react';
import MainFeedNotificationItem from './main-feed-notification-item.js';
import MainFeedJobItem from './main-feed-job-item.js';
import MainFeedProjectItem from './main-feed-project-item.js';
import Profile_Nav from './profile_page/profile_nav.js';
import Profile_Sidebar from './profile_page/profile_sidebar.js';
import MainFeedFilter from './main-feed-filters.js';



export default class MainFeed extends React.Component {
  render() {
    return (
      <div>
        <Profile_Nav
          self_name = "Jane"
          ></Profile_Nav>

        <div>
          <Profile_Sidebar
            first_active = "Project 1"
            second_active = "Project 2"
            third_active = "Project 3"
            fourth_active = "Project 4"
            ></Profile_Sidebar>
        </div>



        <div className="col-md-10 pull-right">

          <MainFeedFilter />

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
                <MainFeedNotificationItem
                  feedItemName ='Update from Team Apple'
                  postData='Team Apple will be closing down this fall after a failure
                  to find any investment money from the grape vine.'/>
              </div>

              <div className="panel panel-default">
                <MainFeedProjectItem
                  feedItemName ='Work Update: Team Croissant'
                  postData='Jim, we need you to start picking up the slack. You need to
                  finish up the mock ups by tomorrow night.'/>
              </div>

              <div className="panel panel-default">
                <MainFeedJobItem
                  feedItemName ='Software Engineer Position'
                  postData='Opportunity of a lifetime to work alongside Team Okra and
                  the best developers the nation has to offer.'
                  rankingType='gold-button'/>
              </div>

              <div className="panel panel-default">
                <MainFeedJobItem
                  feedItemName ='Quality Assurance Engineer Position'
                  postData='TEST WITH THE BEST at Tim Richards Testing Emporium.'
                  rankingType='silver-button'/>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

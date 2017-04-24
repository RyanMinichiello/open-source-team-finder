import React from 'react';
import MainFeedJobItem from './main-feed-job-item.js';
import MainFeedNotificationItem from './main-feed-notification-item.js';

import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import MainFeedFilter from './main-feed-filters.js';
import {getNotificationFeedData, getJobFeedData} from '../../server.js';


export default class MainFeed extends React.Component {
  constructor(props) {

     super(props);
     this.state = {
        contents : [],
        pid : 1,
        feed : 1,
        notifications: null,
        jobItems: null
      };
   }

   refresh() {
     this.getNotificationList(this.state.pid);
     this.getJobList(this.state.pid);
   }

   componentDidMount() {
     this.refresh();
   }

    genererateNotificationItems(){
      if(this.state.notifications) {
        return this.state.notifications.map(this.createNotificationItem);
      }
    }

    genererateJobItems(){
      if(this.state.jobItems) {
        return this.state.jobItems.map(this.createJobItem);
      }
    }

    getNotificationList() {
       getNotificationFeedData(this.state.pid, (notification) => {
          this.setState({notifications: notification});
          }
       );
     }

    getJobList() {
       getJobFeedData(this.state.pid, (jobItem) => {
          this.setState({jobItems: jobItem});
          }
       );
     }


    createNotificationItem(item) {
      return <MainFeedNotificationItem key = {item._id} postData = {item.description} feedItemName = {item.title}/>
    }

    createJobItem(item) {
      return <MainFeedJobItem key = {item._id} postData = {item.description}
        feedItemName = {item.title} tags ={item.tags} rankingType = {item.rankingType} />
    }


  render() {
    return (
      <div>
        <Navbar
          self_name = {this.state.fullName}
          ></Navbar>

        <div>
          <Sidebar
            first_active = "Project 1"
            second_active = "Project 2"
            third_active = "Project 3"
            fourth_active = "Project 4"
            ></Sidebar>
        </div>

        <div className="col-md-10 pull-right">

          <MainFeedFilter />

          <div className="row main-feed-row">
            <div className="col-md-10 main-feed-area">

              {this.genererateNotificationItems()}
              {this.genererateJobItems()}

            </div>
          </div>
        </div>
      </div>
    )
  }
}

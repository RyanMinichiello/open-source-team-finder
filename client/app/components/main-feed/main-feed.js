import React from 'react';
import MainFeedJobItem from './main-feed-job-item.js';
import MainFeedNotificationItem from './main-feed-notification-item.js';

import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import MainFeedFilter from './main-feed-filters.js';
import {getNotificationFeedData, getJobFeedData} from '../../server.js';
import {calculateRecommendation} from '../../util.js'

function getRecommendation(tags) {
    var user_skills = ["Scala", "Node.js", "Agile Methodology"];
    var user_interests = ["Finance", "Clean Energy", "Drones", "Apples"];
    // End the delete
    var job_tags = tags;
    var ranking = calculateRecommendation(user_interests, user_skills, job_tags);
    console.log(ranking);
    return ranking;
}


export default class MainFeed extends React.Component {
  constructor(props) {

     super(props);
     this.state = {
        contents : [],
        pid : 1,
        feed : null,
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
        var t = getRecommendation(item.tags);
      return <MainFeedJobItem key = {item._id} postData = {item.description}
        feedItemName = {item.title} tags ={item.tags} rankingType = {t} />
    }


  render() {
    return (
      <div>
        <Navbar
          self_name = {this.state.fullName}
          ></Navbar>

        <div>
          <Sidebar/>
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

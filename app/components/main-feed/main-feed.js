import React from 'react';
import MainFeedJobItem from './main-feed-job-item.js';
import MainFeedNotificationItem from './main-feed-notification-item.js';

import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import MainFeedFilter from './main-feed-filters.js';
import {getUserInfo, getNotificationFeedData} from '../../server.js';


export default class MainFeed extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
        contents : []
      };
   }

   refresh() {
     getUserInfo(1, (userData) => {
      this.setState(userData);
    });

   }


   componentDidMount() {
     this.refresh();
   }

   getNotificationList() {
     getNotificationFeedData(1, (notifications) => {
       this.setState({notifications : notifications});
     }
    );
    }
    genererateNotificationItems(){
      var list = this.getNotificationList(1);
      if(list) {
        return list.map(this.createNotificationItem);
      }
    }


    createNotificationItem(item) {
      return <MainFeedNotificationItem key = {item} postData = {item.description} feedItemName = {item.title}/>
    }

    generateJobItem(item) {
      return <MainFeedJobItem key = {item} postData = {item.description} feedItemName = {item.title} rankingType = {item.rankingType}/>
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
            <div className="col-md-10 job-feed">

            {this.genererateNotificationItems()}

            </div>
          </div>
        </div>
      </div>
    )
  }
}

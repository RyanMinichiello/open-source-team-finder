import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import FilterBar from './filter-bar.js';
import JobBoardMainFeed from './job-board-main-feed.js';
import JobBoardPost from './job-board-post';
import {getAllJobs} from '../../server.js'
import {getProfileData} from '../../server.js'
import {calculateRecommendation} from '../../util.js'
//import JobBoardTagList from './job-board-tag-list'
//import JobBoardTagItem from './job-board-tag-item'


function getRecommendation(user_skills, user_interests, job_tags) {
    var ranking = calculateRecommendation(user_interests, user_skills, job_tags);
    return ranking;
}

export default class JobBoard extends React.Component {
  constructor(props) {

     super(props);
     this.state = {
        contents : [],
        pid : "000000000000000000000001",
        jobItems: null,
        userSkills: null,
        userInterests: null
      };

   }

   refresh() {
     this.getUserData(this.state.pid);
     this.getJobList(this.state.pid);
   }

   componentDidMount() {
     this.refresh();
   }

  genererateJobItems(){
    if(this.state.jobItems) {
      return this.state.jobItems.map((item) => {
         return(this.createJobItem(item, this.state.userSkills, this.state.userInterests))
    });
    }
  }

  getUserData(pid) {
    getProfileData(pid, (profileData) => {
      this.setState({userSkills: profileData.skills});
      this.setState({userInterests: profileData.interests});
    });
  }

  getJobList(pid) {
     getAllJobs(pid, (jobItem) => {
        this.setState({jobItems: jobItem});
        }
     );
   }

   createJobItem(item, user_skill, user_interest) {
     var t =  getRecommendation(user_skill, user_interest, item.tags);
       return <JobBoardPost key = {item._id} position_description = {item.description}
       position_title = {item.title} tags = {item.tags}
       rankingType = {t}/>
   }

  render() {
    return (
      <div>
        <Navbar
          self_name = "Nick"
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
          <FilterBar />
            <JobBoardMainFeed>
              {this.genererateJobItems()}
            </JobBoardMainFeed>
        </div>
    </div>
    );
  }
}

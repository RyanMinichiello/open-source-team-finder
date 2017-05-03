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


function getRecommendation(tags) {
   // var user_data;
   //TODO: Find a way to store information on the profile in the state.
   //getProfileData(this.state.pid, (profile-data) => {
   //    this.setState(profileData: profile-data);
   // });
    //var user_interests = this.state.profileData;
    //var user_skills = user_data.skills;
    // Delete these lines once the profile data is properly gotten
    // RM - single user hardcode them?
    var user_skills = ["Scala", "Node.js", "Agile Methodology"];
    var user_interests = ["Finance", "Clean Energy", "Drones", "Apples"];
    // End the delete
    var job_tags = tags;
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
        profileData: null,
        ranking: null
      };

   }

   refresh() {
     // Delete these comments when done debugging
     //var check = this.getRecommendation(["Scala", "Finance"]);
     //console.log(check);
     this.getJobList(this.state.pid);
   }

   componentDidMount() {
     this.refresh();
   }

  genererateJobItems(){
    if(this.state.jobItems) {
      return this.state.jobItems.map(this.createJobItem);
    }
  }

  getJobList() {
     getAllJobs(this.state.pid, (jobItem) => {
        this.setState({jobItems: jobItem});
        }
     );
   }




   createJobItem(item) {
     var t =  getRecommendation(item.tags);
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

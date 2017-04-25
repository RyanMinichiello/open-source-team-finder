import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import FilterBar from './filter-bar.js';
import JobBoardMainFeed from './job-board-main-feed.js';
import JobBoardPost from './job-board-post';
import {getAllJobs} from '../../server.js'
//import JobBoardTagList from './job-board-tag-list'
//import JobBoardTagItem from './job-board-tag-item'

export default class JobBoard extends React.Component {
  constructor(props) {

     super(props);
     this.state = {
        contents : [],
        pid : 1,
        jobItems: null
      };
   }

   refresh() {
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
     return <JobBoardPost key = {item._id} position_description = {item.description}
       position_title = {item.title} tags ={item.tags} rankingType = {item.rankingType} />
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

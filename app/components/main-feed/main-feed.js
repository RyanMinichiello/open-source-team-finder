import React from 'react';
import MainFeedProjectItem from './main-feed-project-item.js';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import MainFeedFilter from './main-feed-filters.js';
import {getMainFeedJobItemData} from '../../server.js';




export default class MainFeed extends React.Component {
  constructor(props) {
    // super() calls the parent class constructor -- e.g. React.Component's constructor.
    super(props);
    // Set state's initial value.
    // Note that the constructor is the ONLY place you should EVER set state directly!
    // In all other places, use the `setState` method instead.
    // Setting `state` directly in other places will not trigger `render()` to run, so your
    // program will have bugs.
    this.state = {
      // Empty feed.
      contents: []
    };
  }

  componentDidMount() {
    getMainFeedJobItemData(1, (feedData) => {
      // Note: setState does a *shallow merge* of the current state and the new
      // state. If state was currently set to {foo: 3}, and we setState({bar: 5}),
      // state would then be {foo: 3, bar: 5}. This won't be a problem here.
      this.setState(feedData);
    });
  }

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
<<<<<<< HEAD

=======
        
>>>>>>> createprojjs
        <div className="col-md-10 pull-right">

          <MainFeedFilter />

          <div className="row main-feed-row">
            <div className="col-md-10 job-feed">

              //Render feed items here
              {this.state.contents.map((feedItems) => {
                return (
                    <MainFeedProjectItem key={feedItems.projectItems.id} data={feedItems.projectItems}/>

                );
              })}


            </div>
          </div>
        </div>
      </div>
    )
  }
}

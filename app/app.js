import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
// Each major browser view user interface must be imported.
import ProjectPage from './components/project-page/project-page.js';
import Profile from './components/profile-page/profile.js';
import MainFeed from './components/main-feed/main-feed.js';
import JobBoard from './components/job-board/job-board.js'
import CreateProject from './components/createproject/createproject.js';
import InboxPage from './components/inbox/inbox-inboxpage.js'


// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" components={MainFeed}/>
    <Route path="/main-feed" components={MainFeed}/>
    <Route path="/inbox" components={InboxPage}/>
    <Route path="/profile" components={Profile}/>
    <Route path="/createproject" components={CreateProject}/>
    <Route path="/ostf-job-board" components={JobBoard}/>
    <Route path="/project-page" components={ProjectPage}/>
  </Router>
), document.getElementById('app'));

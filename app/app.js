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
import InboxPage2 from './components/inbox/inbox-inboxpage2.js'
import InboxPage3 from './components/inbox/inbox-inboxpage3.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.


if (document.getElementById('main-feed') !== null) {
  ReactDOM.render(
    <MainFeed />,
    document.getElementById('main-feed')
  );
} else if (document.getElementById('job-board') !== null) {
  ReactDOM.render(
    <JobBoard />,
    document.getElementById('job-board')
  );
} else if (document.getElementById('project_page-zone') !== null) {
  ReactDOM.render(
    <ProjectPage pid={1} uid={1}/>,
    document.getElementById('project_page-zone')
  );
} else if (document.getElementById('profile') !== null) {
  ReactDOM.render(
    <Profile pid={1}/>,
    document.getElementById('profile')
  );

} else if (document.getElementById('inbox01') !== null) {

  ReactDOM.render(
    <InboxPage />,
    document.getElementById('inbox01')
);

} else if (document.getElementById('create-project') !== null) {
  ReactDOM.render(
    <CreateProject />,
    document.getElementById('create-project')
);

} else if (document.getElementById('inbox02') !== null) {
  ReactDOM.render(
    <InboxPage2 />,
    document.getElementById('inbox02')
);
} else if (document.getElementById('inbox03') !== null) {
  ReactDOM.render(
    <InboxPage3 />,
    document.getElementById('inbox03')
  );
}

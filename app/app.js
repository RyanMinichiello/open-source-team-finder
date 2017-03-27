
import ReactDOM from 'react-dom';
import React from 'react';


// Each major browser view user interface must be imported.

import ProjectPage from './components/project-page.js';
import Profile_Temp from './components/profile_page/profile_temp.js';
import MainFeed from './components/main-feed.js';
import InboxPage from './components/inbox-inboxpage.js'


// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.

if (document.getElementById('main-feed') !== null) {
  ReactDOM.render(
    <MainFeed />,
    document.getElementById('main-feed')
  );

} else if (document.getElementById('project_page-zone') !== null) {
  ReactDOM.render(
    <ProjectPage />,
    document.getElementById('project_page-zone')
  );

} else if (document.getElementById('profile_temp') !== null) {
  ReactDOM.render(
    <Profile_Temp />,
    document.getElementById('profile_temp')
  );

} else if (document.getElementById('inbox-page-zone') !== null) {
  ReactDOM.render(
    <InboxPage />,
    document.getElementById('inbox-page-zone')
);
}

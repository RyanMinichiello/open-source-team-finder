
import ReactDOM from 'react-dom';
import React from 'react';


// Each major browser view user interface must be imported.
import MainFeed from './components/main-feed.js';
import UI02 from './components/ui-02.js';
import ProjectPage from './components/project-page.js'
import InboxPage from './components/inbox-inboxpage.js'


// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.



if (document.getElementById('main-feed') !== null) {
  ReactDOM.render(
    <MainFeed />,
    document.getElementById('main-feed')
  );
} else if (document.getElementById('ui-02') !== null) {
  ReactDOM.render(
    <UI02 />,
    document.getElementById('ui-02')
  );
}else if (document.getElementById('project_page-zone') !== null) {
  ReactDOM.render(
    <ProjectPage />,
    document.getElementById('project_page-zone')
  );
} else if (document.getElementById('inbox-page-zone') !== null) {
  ReactDOM.render(
    <InboxPage />,
    document.getElementById('inbox-page-zone')
);
}

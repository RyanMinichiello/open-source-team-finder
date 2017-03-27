import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import UI01 from './components/ui-01.js';
import UI02 from './components/ui-02.js';
import ProjectPage from './components/project-page.js'
import InboxPage from './components/inbox-inboxpage.js'
import InboxPage2 from './components/inbox-inboxpage2.js'
import InboxPage3 from './components/inbox-inboxpage3.js'

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('ui-01') !== null) {
  ReactDOM.render(
    <UI01 />,
    document.getElementById('ui-01')
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
}else if (document.getElementById('inbox-page-zone2') !== null) {
  ReactDOM.render(
    <InboxPage2 />,
    document.getElementById('inbox-page-zone2')
);
}else if (document.getElementById('inbox-page-zone3') !== null) {
  ReactDOM.render(
    <InboxPage3 />,
    document.getElementById('inbox-page-zone3')
  );
}

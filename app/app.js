import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import ProjectPage from './components/project-page.js';
import Profile_Temp from './components/profile_page/profile_temp.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.

 if (document.getElementById('project_page-zone') !== null) {
  ReactDOM.render(
    <ProjectPage />,
    document.getElementById('project_page-zone')
  );
}else if (document.getElementById('profile_temp') !== null) {
  ReactDOM.render(
    <Profile_Temp />,
    document.getElementById('profile_temp')
  );
}

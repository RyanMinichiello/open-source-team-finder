
import ReactDOM from 'react-dom';
import React from 'react';


// Each major browser view user interface must be imported.
import MainFeed from './components/main-feed.js';
import UI02 from './components/ui-02.js';


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
}

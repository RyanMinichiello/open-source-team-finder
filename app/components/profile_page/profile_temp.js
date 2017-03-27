import React from 'react';
import Profile_Nav from './profile_nav.js';
import Profile_Sidebar from './profile_sidebar.js';
import Profile_Banner from './profile_banner.js';
import Profile_About from './profile_about.js';
import Profile_Skills from './profile_skills';
import Profile_Teams from './profile_teams.js';

export default class Profile_Temp extends React.Component {
    render() {
        return(
            <div>
                <Profile_Nav/>
               <div className="row">
                  <Profile_Sidebar/>
                  <div className="project-zone col-md-10">
                    <Profile_Banner/>
                    <div className="project-container row">
                        <Profile_About/>
                        <Profile_Skills/>
                        <Profile_Teams/>
                    </div>
               </div>
           </div>
          </div>
        )
    }
}

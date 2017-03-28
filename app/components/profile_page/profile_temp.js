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
                <Profile_Nav
                    self_name = "Jane"
                    ></Profile_Nav>
               <div className="row">
                  <Profile_Sidebar
                      first_active = "Project 1"
                      second_active = "Project 2"
                      third_active = "Project 3"
                      fourth_active = "Project 4"
                      ></Profile_Sidebar>

                  <div className="project-zone col-md-10">

                    <Profile_Banner
                        user_banner = "img/new_banner.jpg"
                        user_img = "img/jane.png"
                        direct_message = "Hi Lynda, I'm Jane working with the Okra Project.  We are very impressed by your skillset and are hoping you'll join our team!"
                        ></Profile_Banner>

                    <div className="project-container row">

                        <Profile_About
                            about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at enim cursus, vestibulum eros vel, suscipit lorem. Phasellus eget lacus ante. Fusce orci est, vestibulum et gravida vitae, feugiat eget est. Donec nulla tellus, suscipit non enim vitae, condimentum consequat nisl. Suspendisse potenti. Pellentesque accumsan tortor quis tellus vulputate bibendum. Quisque sit amet nulla vehicula, laoreet metus quis, hendrerit nunc."
                            email = "myemail@gmail.com"
                            contact = "linkedin.com/lynda"
                            ></Profile_About>

                        <Profile_Skills
                            name = "Lynda Doe"
                            first_skill = "Agile Development"
                            second_skill = "JavaScript"
                            third_skill = "Scala"
                            fourth_skill = "Node.js"
                            first_interest = "Clean Energy"
                            second_interest = "Finance"
                            ></Profile_Skills>

                        <Profile_Teams
                            user_active_project = "Lime Team"
                            user_past_first = "Pear Team"
                            user_past_second = "Mango Team"
                            ></Profile_Teams>

                    </div>
               </div>
           </div>
          </div>
        )
    }
}

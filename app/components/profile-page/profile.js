import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import Profile_Banner from './profile_banner.js';
import Profile_About from './profile_about.js';
import Profile_Skills from './profile_skills';
import Profile_Teams from './profile_teams.js';


export default class Profile extends React.Component {
    render() {
        return(
            <div>
                <Navbar
                    self_name = "Jane"
                    ></Navbar>
                <div className="row">
                    <Sidebar
                          first_active = "Okra Team"
                          second_active = "Peach Team"
                          third_active = "Garbanzo Bean Team"
                          fourth_active = "Apple Team"
                    ></Sidebar>
                <div className = "col-md-2"></div>
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

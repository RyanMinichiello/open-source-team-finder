import React from 'react';
import Profile_Nav from './profile_nav.js';
import Profile_Sidebar from './profile_sidebar.js';

export default class Profile_Temp extends React.Component {
    render() {
        return(
            <div>
                <Profile_Nav/>
               <div className="row">
                  <Profile_Sidebar/>
                  <div className="project-zone col-md-10">
                    <div className="project-header row">
                        <img src="img/new_banner.jpg" width="100%" height="100%"/>
                      <div className="header-buttons">
                        <div className="container pull-right">
                            <button type="button" className="btn btn-info btn-lg pull-right"  id= "chat-pop" data-toggle="modal" data-target="#myModal">Message</button>

                            <div className="modal fade" id="myModal" role="dialog">
                              <div className="modal-dialog">

                                <div className="modal-content">
                                  <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title">Message</h4>
                                  </div>
                                  <div className="modal-body">
                                    <p>Hi Lynda, I'm Jane working with the Okra Project.  We are very impressed by your skillset and are hoping you'll join our team!</p>
                                  </div>
                                  <div className="modal-footer">
                                    <button type="button" className="btn btn-default" data-dismiss="modal">Send</button>
                                  </div>
                                </div>

                              </div>
                            </div>

                          </div>
                      </div>
                    </div>
                    <div className="project-banner">
                        <img className = "user-img" src="img/jane.png"/>
                    </div>
                    <div className="project-container row">
                      <div className="project-description col-md-4">
                        <h3>Bio</h3>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at enim cursus, vestibulum eros vel, suscipit lorem. Phasellus eget lacus ante. Fusce orci est, vestibulum et gravida vitae, feugiat eget est. Donec nulla tellus, suscipit non enim vitae, condimentum consequat nisl. Suspendisse potenti. Pellentesque accumsan tortor quis tellus vulputate bibendum. Quisque sit amet nulla vehicula, laoreet metus quis, hendrerit nunc.</div>
                        <h3>Contact</h3>
                        <div className="skill-item">myemail@gmail.com
                        </div>
                        <div className="skill-item">linkedin.com/lynda
                        </div>
                      </div>
                      <div className="project-message col-md-4 mid-col">
                        <h3>
                            Lynda Doe
                        </h3>
                        <h3>Skills</h3>
                        <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
                        Agile Development
                        </button>
                        <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
                        Javascript
                        </button>
                        <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
                        Scala
                        </button>
                        <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
                        Node.js
                        </button>
                        <h3>Interests</h3>
                        <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
                        Clean Energy
                        </button>
                        <button type="button" className="btn btn-default navbar-btn orange-btn" id="nav-btn-create">
                        Finance
                        </button>

                      </div>
                      <div className="project-positions col-md-4">
                        <h3>Current Projects</h3>
                        <ul className="nav nav-pills nav-stacked">
                           <li role="presentation"><a href="#"> Lime Team </a> </li>
                        </ul>
                        <h3>Previous Projects</h3>
                        <ul className="nav nav-pills nav-stacked">
                           <li role="presentation"><a href="#"> Pear Team </a> </li>
                           <li role="presentation"><a href="#"> Mango Team</a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
               </div>
           </div>
        )
    }
}

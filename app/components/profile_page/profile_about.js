import React from 'react';

export default class Profile_About extends React.Component {
    render() {
        return (
            <div>
            <div className="project-description col-md-4">
              <h3>Bio</h3>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at enim cursus, vestibulum eros vel, suscipit lorem. Phasellus eget lacus ante. Fusce orci est, vestibulum et gravida vitae, feugiat eget est. Donec nulla tellus, suscipit non enim vitae, condimentum consequat nisl. Suspendisse potenti. Pellentesque accumsan tortor quis tellus vulputate bibendum. Quisque sit amet nulla vehicula, laoreet metus quis, hendrerit nunc.</div>
              <h3>Contact</h3>
              <div className="skill-item">myemail@gmail.com
              </div>
              <div className="skill-item">linkedin.com/lynda
              </div>
            </div>
        </div>
        )
    }
}
